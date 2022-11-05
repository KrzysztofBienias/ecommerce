import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import { useRouter } from 'next/router';

const Success: NextPage = () => {
    const router = useRouter();

    return (
        <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col font-montserrat">
            <Header />

            <div className="align-center flex flex-1 flex-col items-center justify-center space-y-5 p-6 text-center">
                <h1 className="text-xl font-bold sm:text-3xl md:text-4xl xl:text-5xl 2xl:pb-4 2xl:text-6xl">
                    Thank you, your order has been confirmed!
                </h1>
                <p className="max-w-3xl text-sm md:text-base 2xl:text-2xl">
                    Thank you for shopping with us. We&apos;ll send a confirmation once your item has shipped, if you would like
                    to check the status of your order(s) please press the link below.
                </p>
                <div
                    className="cursor-pointer px-2 py-2 hover:italic sm:px-4 sm:py-4 lg:px-6 lg:py-6"
                    onClick={() => router.push('/profile')}
                >
                    Profile
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Success;
