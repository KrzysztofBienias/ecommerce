'use client';

import ProductFeed from '../../components/productFeed';

import { useGetGroupedProductsQuery } from '../../store/api/productsApi';

const Page = () => {
    const { data: products } = useGetGroupedProductsQuery(null);

    return (
        <main>
            <ProductFeed groupedProducts={products} />
        </main>
    );
};

export default Page;
