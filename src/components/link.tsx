import { useRouter } from 'next/router';
import { signIn, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';

interface LinkProps {
    children: React.ReactNode;
    route?: string;
    isSignIn?: boolean;
    delay?: number;
}

const Link = ({ children, route, isSignIn, delay }: LinkProps) => {
    const router = useRouter();
    const onClickHandler = () => {
        if (route) return router.push(route);
        else if (isSignIn) return signOut();
        else if (!isSignIn) return signIn();
    };

    let linkVariant = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

    if (delay) Object.assign(linkVariant.show, { transition: { delay } });

    return (
        <motion.a
            className="group cursor-pointer p-2 hover:font-bold sm:p-4 lg:p-6"
            onClick={onClickHandler}
            variants={linkVariant}
        >
            <span className="relative inline-block overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-[100%_50%] before:scale-x-0 before:bg-gray-700 before:transition-transform before:duration-300 before:ease-[cubic-bezier(.76,0,.24,1)] focus:before:origin-[0%_50%] focus:before:scale-x-100  group-hover:before:origin-[0%_50%] group-hover:before:scale-x-100">
                {children}
            </span>
        </motion.a>
    );
};

export default Link;
