import type { GetServerSideProps, NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import ProductFeed from '../components/productFeed';

interface ProductType {
    products: {
        id: number;
        title: string;
        price: number;
        category: string;
        image: string;
    }[];
}

const Products: NextPage<ProductType> = ({ products }) => {
    return (
        <div className="mx-auto max-w-screen-2xl font-montserrat">
            <Header />
            <ProductFeed products={products} />
            <Footer />
        </div>
    );
};

export const getStaticProps: GetServerSideProps = async () => {
    const products = await fetch('https://my-ecommerce-api-modern.herokuapp.com/items').then((res) => res.json());

    return {
        props: {
            products,
        },
    };
};

export default Products;
