import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import MobileImage from '../images/mobile-hero.jpg';
import DesktopImage from '../images/desktop-hero.jpg';
interface ProductType {
    products: {
        id: number;
        title: string;
        price: number;
        category: string;
        image: string;
    }[];
}

const Home: NextPage<ProductType> = ({ products }) => {
    return (
        <div className="mx-auto max-w-screen-2xl font-montserrat">
            <Head>
                <title>THE ABCDE</title>
            </Head>
            <Header />
            <main>
                <div className="hidden md:block">
                    <Image
                        src={MobileImage}
                        height={1423}
                        width={1917}
                        objectFit="contain"
                        alt="Mobile hero image of the collection"
                    />
                </div>
                <div className="md:hidden">
                    <Image
                        src={DesktopImage}
                        height={2400}
                        width={1920}
                        objectFit="contain"
                        alt="Desktop hero image of the collection"
                    />
                </div>
            </main>
        </div>
    );
};

export async function getServerSideProps() {
    const products = await fetch('https://my-ecommerce-api-modern.herokuapp.com/items').then((res) => res.json());

    return {
        props: {
            products,
        },
    };
}

export default Home;
