import React from 'react';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectItems } from '../store/slices/basketSlice';
import Link from './link';
import { motion } from 'framer-motion';

const navVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const logoVariant = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { staggerChildren: 0.1, delay: 0.4 } },
};

const subLogoWrapperVariant = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { staggerChildren: 0.1, delay: 0.6 } },
};

const subLogoVariant = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

const Header = () => {
    const { data: session } = useSession();
    const items = useSelector(selectItems);

    return (
        <header>
            <motion.nav
                variants={navVariant}
                initial="hidden"
                animate="show"
                className="flex justify-between px-5 py-6 text-sm min-[440px]:text-base sm:px-14 2xl:px-0"
            >
                <Link route="/">Home</Link>
                <motion.div variants={navVariant} className="text-center min-[360px]:flex">
                    <Link isSignIn={!!session}>{session ? 'Sign out' : 'Sign in'}</Link>
                    <Link route="/profile">Profile</Link>
                    <Link route="/products">Products</Link>
                </motion.div>
                <Link route="/cart" delay={0.3}>{`Cart(${items.length})`}</Link>
            </motion.nav>

            <div className="mx-auto my-5 max-w-fit">
                <motion.div variants={logoVariant} initial="hidden" animate="show" className="border-y border-gray-300">
                    <h2 className="py-4 text-center text-5xl font-bold min-[440px]:text-7xl min-[600px]:text-8xl md:text-9xl xl:text-[200px]">
                        THE ABCDE
                    </h2>
                </motion.div>
                <motion.div
                    variants={subLogoWrapperVariant}
                    initial="hidden"
                    animate="show"
                    className="mb-8 flex justify-between border-b-2 border-gray-700 px-6 py-2"
                >
                    <motion.p variants={subLogoVariant} className="text-xs">
                        High-End Furniture
                    </motion.p>
                    <motion.p variants={subLogoVariant} className="text-xs">
                        SINCE 1978
                    </motion.p>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
