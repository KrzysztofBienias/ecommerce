import type { NextPage, GetServerSideProps } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import Order from '../components/order';
import db from './../../firebase';
import moment from 'moment';

interface OrderType {
    orders: {
        id: string;
        amount: number;
        amountShipping: number;
        images: string[];
        items: any;
        timestamp: number;
    }[];
}

const Profile: NextPage<OrderType> = ({ orders }) => {
    const { data: session } = useSession();

    return (
        <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col font-montserrat">
            <Header />

            <main className="flex-1">
                {!session ? (
                    <div className="p-10 text-center">
                        <p className="text-sm font-bold sm:text-lg md:text-3xl 2xl:pb-4 2xl:text-5xl">
                            You are supposed to sign in first
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col px-6 lg:flex-row lg:justify-center lg:px-10">
                        <div id="profile" className="pb-5 text-center lg:pr-10">
                            <Image src={session.user?.image || ''} alt="" width={150} height={150} className="rounded-full" />
                            <p>{session.user?.name}</p>
                            <p>{session.user?.email}</p>
                        </div>
                        <div className="max-w-[876px] lg:mx-14 lg:flex-1">
                            {orders.map((order, index) => (
                                <Order
                                    amount={order.amount}
                                    images={order.images}
                                    items={order.items}
                                    timestamp={order.timestamp}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const session = await getSession(context);

    if (!session) {
        return {
            props: {},
        };
    }

    const stripeOrders = await db
        .collection('users')
        .doc(session.user?.email!)
        .collection('orders')
        .orderBy('timestamp', 'desc')
        .get();

    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );

    return {
        props: {
            orders,
        },
    };
};
