'use client';

import Product from './product';
import { motion } from 'framer-motion';
import { useGetAllProductsQuery } from '../store/api/productsApi';

const productsPreviewVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delay: 0.4, duration: 0.4 } },
};

const ProductsPreview = () => {
    const { isLoading, isFetching, data, error } = useGetAllProductsQuery(null);

    return (
        <motion.div
            variants={productsPreviewVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 xs:grid-cols-2 xs:grid-rows-2 xs:gap-2 md:grid-cols-4 md:grid-rows-none"
        >
            {data && data.slice(0, 4).map((product) => <Product product={product} key={product.id} />)}
        </motion.div>
    );
};

export default ProductsPreview;
