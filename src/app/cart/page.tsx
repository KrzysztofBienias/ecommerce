'use client';

import CheckoutProduct from '../../components/checkoutProduct';
import { selectItems, selectTotal } from '../../store/slices/basketSlice';

import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const checkoutProductVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.2, duration: 0.5, delay: 0.2 } },
};

const infoVariant = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 1 } },
};

const stripePromise = loadStripe(process.env.stripe_public_key as string);

const Page = () => {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const { data: session } = useSession();
    const checkoutProductRef = useRef<HTMLDivElement | null>(null);

    const createCheckoutSession = async () => {
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items,
            email: session && session?.user?.email,
        });
        console.log(checkoutSession);
        const result = await stripe?.redirectToCheckout({ sessionId: checkoutSession.data.id });

        if (result?.error) alert(result.error.message);
    };

    return (
        <main className="flex w-full max-w-6xl flex-1 flex-col justify-between sm:px-10 md:mx-auto md:mt-14 md:flex-row xl:mt-24 xl:px-0">
            <motion.div
                variants={checkoutProductVariant}
                initial="hidden"
                animate="show"
                className="order-2 pl-2 md:order-1 md:w-2/3 md:max-w-3xl md:pl-0"
            >
                <AnimatePresence mode="popLayout">
                    {items.map((item, index) => (
                        <CheckoutProduct ref={checkoutProductRef} item={item} key={index} />
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="order-1 md:order-2">
                <motion.div transition={{ staggerChildren: 0.1 }} className="p-4 text-right sm:p-0 sm:py-4">
                    <motion.p
                        variants={infoVariant}
                        initial="hidden"
                        animate="show"
                        className="text-xl font-bold lg:text-2xl xl:text-4xl"
                    >
                        Total price: ${total}
                    </motion.p>
                    <motion.p variants={infoVariant} initial="hidden" animate="show" className="lg:text-lg xl:text-2xl">
                        items: {items.length}
                    </motion.p>
                    <motion.p variants={infoVariant} initial="hidden" animate="show">
                        (max 5 items)
                    </motion.p>
                    <motion.button
                        variants={infoVariant}
                        initial="hidden"
                        animate="show"
                        role="link"
                        disabled={!session || items.length === 0}
                        onClick={createCheckoutSession}
                        className={`group my-2 py-4 hover:font-bold ${
                            !session || items.length === 0 ? 'cursor-not-allowed' : null
                        }`}
                    >
                        <motion.span
                            variants={infoVariant}
                            initial="hidden"
                            animate="show"
                            className="relative inline-block overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-[100%_50%] before:scale-x-0 before:bg-gray-700 before:transition-transform before:duration-300 before:ease-[cubic-bezier(.76,0,.24,1)] focus:before:origin-[0%_50%] focus:before:scale-x-100  group-hover:before:origin-[0%_50%] group-hover:before:scale-x-100"
                        >
                            {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                        </motion.span>
                    </motion.button>
                </motion.div>
            </div>
        </main>
    );
};

export default Page;
