'use client';

import { useGetGroupedProductsQuery } from '../../store/api/productsApi';
import Product from '../../components/product';
import { motion } from 'framer-motion';

const wrapperVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.1, delay: 0.4 } },
};

const textVariant = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

const Page = () => {
    const { data: products } = useGetGroupedProductsQuery(null);

    return (
        <main className="min-h-screen">
            {products &&
                Object.entries(products).map(([category, products]) => (
                    <motion.div
                        variants={wrapperVariant}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        key={category}
                    >
                        <motion.h3
                            variants={textVariant}
                            className="pt-20 pb-10 pl-2 text-4xl font-bold sm:text-6xl md:pr-4 md:text-7xl xl:text-8xl 2xl:pb-4 2xl:pr-0 2xl:text-9xl"
                        >
                            {category}s
                        </motion.h3>
                        <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                            {products.map((product) => (
                                <Product product={product} key={product.id} />
                            ))}
                        </div>
                    </motion.div>
                ))}
        </main>
    );
};

export default Page;
