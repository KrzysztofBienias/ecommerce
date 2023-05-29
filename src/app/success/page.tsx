'use client';

import Header from '../../components/header';
import Link from '../../components/link';
import Footer from '../../components/footer';

import { motion } from 'framer-motion';

const wrapperVariant = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { delay: 0.8 } },
};

const Page = () => {
    return (
        <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
            <Header />

            <motion.div
                variants={wrapperVariant}
                initial="hidden"
                animate="show"
                className="align-center flex flex-1 flex-col items-center justify-center space-y-5 p-6 text-center"
            >
                <h1 className="text-xl font-bold sm:text-3xl md:text-4xl xl:text-5xl 2xl:pb-4 2xl:text-6xl">
                    Thank you, your order has been confirmed!
                </h1>
                <p className="max-w-3xl text-sm md:text-base 2xl:text-2xl">
                    Thank you for shopping with us. We&apos;ll send a confirmation once your item has shipped, if you would like
                    to check the status of your order(s) please press the link below.
                </p>
                <Link route="/profile">Profile</Link>
            </motion.div>

            <Footer />
        </div>
    );
};

export default Page;
