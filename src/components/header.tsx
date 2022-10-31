import React from 'react';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
    const router = useRouter();
    const { data: session } = useSession();

    return (
        <header>
            <div className="flex justify-between px-5 py-6 text-sm min-[440px]:text-base sm:px-14 2xl:px-0">
                <p
                    onClick={() => router.push('/')}
                    className="text-i cursor-pointer px-2 py-2 hover:italic sm:px-4 sm:py-4 lg:px-6 lg:py-6"
                >
                    Home
                </p>
                <div className="text-center min-[360px]:flex ">
                    <p
                        className="cursor-pointer px-2 py-2 hover:italic sm:px-4 sm:py-4 lg:px-6 lg:py-6"
                        onClick={() => (session ? signOut() : signIn())}
                    >
                        {session ? 'Sign out' : 'Sign in'}
                    </p>
                    <p
                        onClick={() => router.push('/profile')}
                        className="cursor-pointer px-2 py-2 hover:italic sm:px-4 sm:py-4 lg:px-6 lg:py-6"
                    >
                        Profile
                    </p>
                    <p
                        onClick={() => router.push('/products')}
                        className="cursor-pointer px-2 py-2 hover:italic sm:px-4 sm:py-4 lg:px-6 lg:py-6"
                    >
                        Products
                    </p>
                </div>
                <p
                    onClick={() => router.push('/cart')}
                    className="cursor-pointer px-2 py-2 hover:italic sm:px-4 sm:py-4 lg:px-6 lg:py-6"
                >
                    Cart(10)
                </p>
            </div>
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
