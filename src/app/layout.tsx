import { Montserrat } from 'next/font/google';
import Header from '../components/header';
import Footer from '../components/footer';
import Providers from '../providers/providers';
import '../styles/globals.css';

const montserrat = Montserrat({
    weight: ['400'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'THE ABCDE',
    description: 'Just arrived our latest collection of futuristic furniture',
};

interface Props {
    children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Providers>
                    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
};

export default RootLayout;
