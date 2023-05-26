'use client';

import { SessionProvider } from 'next-auth/react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store/store';

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <SessionProvider>
            <ReduxProvider store={store}>{children}</ReduxProvider>
        </SessionProvider>
    );
};

export default Providers;
