import type { GetServerSideProps, NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import ProductFeed from '../components/productFeed';
import type { ProductT } from '../types';

interface ProductsI {
    products: ProductT[];
}

const Products: NextPage<ProductsI> = ({ products }) => {
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
