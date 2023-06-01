'use client';

import Header from '../../components/header';
import ProductFeed from '../../components/productFeed';
import Footer from '../../components/footer';

import { useGetGroupedProductsQuery } from '../../store/api/productsApi';

const Page = () => {
    const { data: products } = useGetGroupedProductsQuery(null);

    return (
        <div className="mx-auto max-w-screen-2xl">
            <Header />
            <ProductFeed groupedProducts={products} />
            <Footer />
        </div>
    );
};

export default Page;
