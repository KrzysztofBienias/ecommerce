import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Order from '../components/order';

const Profile: NextPage = () => {
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
                        <div>
                            <Order />
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Profile;
