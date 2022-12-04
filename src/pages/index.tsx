import type { GetServerSideProps, NextPage } from 'next';
import Header from '../components/header';
import HomeContent from '../components/homeContent';
import HeroImage from '../components/heroImage';
import ProductsPreview from '../components/productsPreview';
import Footer from '../components/footer';
import type { ProductT } from '../types';
import axios from 'axios';

interface HomeI {
    products: ProductT[];
}

const Home: NextPage<HomeI> = ({ products }) => {
    return (
        <div className="mx-auto max-w-screen-2xl font-montserrat">
            <Header />
            <main>
                <HeroImage />
                <HomeContent />
                <ProductsPreview products={products} />
            </main>
            <Footer />
        </div>
    );
};

export const getStaticProps: GetServerSideProps = async () => {
    const { items: products } = await axios.get('https://api-dun-phi.vercel.app/').then((res) => res.data);

    return {
        props: {
            products,
        },
    };
};

export default Home;
