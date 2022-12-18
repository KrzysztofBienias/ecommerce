import React from 'react';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/slices/basksetSlice';
import Link from './link';

const Header = () => {
    const { data: session } = useSession();
    const items = useSelector(selectItems);

    return (
        <header>
            <nav className="flex justify-between px-5 py-6 text-sm min-[440px]:text-base sm:px-14 2xl:px-0">
                <Link route="/">Home</Link>
                <div className="text-center min-[360px]:flex ">
                    <Link isSignIn={session ? true : false}>{session ? 'Sign out' : 'Sign in'}</Link>
                    <Link route="/profile">Profile</Link>
                    <Link route="/products">Products</Link>
                </div>
                <Link route="/cart">{`Cart(${items.length})`}</Link>
            </nav>

            <div className="mx-auto my-5 max-w-fit">
                <div className="border-y border-gray-300">
                    <h2 className="py-4 text-center text-5xl font-bold min-[440px]:text-7xl min-[600px]:text-8xl md:text-9xl xl:text-[200px]">
                        THE ABCDE
                    </h2>
                </div>
                <div className="mb-8 flex justify-between border-b-2 border-gray-700 px-6 py-2">
                    <p className="text-xs">High-End Furniture</p>
                    <p className="text-xs">SINCE 1978</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
