import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { Provider } from 'react-redux';
import store from '../store/store';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
    return (
        <SessionProvider session={pageProps.session}>
            <Provider store={store}>
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="description" content="Just arrived our latest collection of futuristic furniture" key="desc" />
                    <title>THE ABCDE</title>
                </Head>
                <Component {...pageProps} />
            </Provider>
        </SessionProvider>
    );
}

export default MyApp;
