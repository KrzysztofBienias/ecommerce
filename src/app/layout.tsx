import { Montserrat } from 'next/font/google';
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
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default RootLayout;
