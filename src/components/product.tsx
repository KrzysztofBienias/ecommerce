import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../store/slices/basketSlice';
import { Product } from '../types';
import { motion } from 'framer-motion';

interface Props {
    product: Product;
}

const transitionVariant = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

const Product: React.FC<Props> = ({ product }) => {
    const dispatch = useDispatch();

    const addProductToBasket = () => {
        dispatch(addToBasket(product));
    };

    return (
        <motion.div className="pb-6 md:pb-0" key={product.id}>
            <motion.div variants={transitionVariant} onClick={addProductToBasket} className="cursor-pointer overflow-hidden">
                <Image
                    className="transition duration-150 ease-out hover:scale-125"
                    src={product.image}
                    alt={product.title}
                    width={800}
                    height={800}
                />
            </motion.div>
            <motion.div variants={transitionVariant} className="flex justify-between px-2">
                <p>{product.title}</p>
                <p className="font-bold">${product.price}</p>
            </motion.div>
        </motion.div>
    );
};

export default Product;
