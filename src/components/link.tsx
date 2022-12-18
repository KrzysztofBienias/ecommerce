import { useRouter } from 'next/router';
import { signIn, signOut } from 'next-auth/react';

interface LinkProps {
    children: React.ReactNode;
    route?: string;
    isSignIn?: boolean;
}

const Link = ({ children, route, isSignIn }: LinkProps) => {
    const router = useRouter();
    const onClickHandler = () => {
        if (route) return router.push(route);
        else if (isSignIn) return signOut();
        else if (!isSignIn) return signIn();
    };

    return (
        <a className="group cursor-pointer p-2 hover:font-bold sm:p-4 lg:p-6" onClick={onClickHandler}>
            <span className="relative inline-block overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-[100%_50%] before:scale-x-0 before:bg-gray-700 before:transition-transform before:duration-300 before:ease-[cubic-bezier(.76,0,.24,1)] focus:before:origin-[0%_50%] focus:before:scale-x-100  group-hover:before:origin-[0%_50%] group-hover:before:scale-x-100">
                {children}
            </span>
        </a>
    );
};

export default Link;
