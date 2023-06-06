'use client';

import Order from '../../components/order';
import InfoText from '../../components/infoText';

import { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import moment from 'moment';
import db from '../../../firebase';

const orderWrapperVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 1 } },
};

const profileWrapperVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { delay: 0.8 } },
};

async function fetchOrders(session: Session) {
    const stripeOrders = await db
        .collection('users')
        .doc(session.user?.email!)
        .collection('orders')
        .orderBy('timestamp', 'desc')
        .get();

    return stripeOrders.docs.map((order) => ({
        id: order.id,
        amount: order.data().amount,
        amountShipping: order.data().amount_shipping,
        images: order.data().images,
        timestamp: moment(order.data().timestamp.toDate()).unix(),
    }));
}

const Page = () => {
    const { data: session } = useSession();
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        if (session) {
            fetchOrders(session)
                .then((orders) => setOrders(orders))
                .catch((error) => console.log('Error fetching orders: ', error));
        }
    }, [session]);

    if (!session) {
        return (
            <main className="flex flex-1 items-center justify-center">
                <InfoText>You are supposed to sign in first</InfoText>
            </main>
        );
    }

    return (
        <main className="min-h-full flex-1">
            {session && (
                <div className="flex flex-col px-6 lg:flex-row lg:justify-center lg:px-10">
                    <motion.div
                        variants={profileWrapperVariant}
                        initial="hidden"
                        animate="show"
                        id="profile"
                        className="pb-5 text-center lg:pr-10"
                    >
                        <Image
                            src={session.user?.image!}
                            alt="User image"
                            width={150}
                            height={150}
                            className="mx-auto rounded-full"
                        />
                        <p>{session.user?.name}</p>
                        <p>{session.user?.email}</p>
                    </motion.div>

                    <motion.div variants={orderWrapperVariant} initial="hidden" animate="show" className="max-w-5xl flex-1">
                        {orders ? (
                            orders.map((order, index) => (
                                <Order
                                    key={index}
                                    amount={order.amount}
                                    images={order.images}
                                    items={order.images.length}
                                    timestamp={order.timestamp}
                                />
                            ))
                        ) : (
                            <InfoText>Loading...</InfoText>
                        )}
                    </motion.div>
                </div>
            )}
        </main>
    );
};

export default Page;
