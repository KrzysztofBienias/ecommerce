import { forwardRef, Ref } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { addToBasket, removeFromBasket } from '../store/slices/basketSlice';
import type { Product } from '../types';

interface Props {
    item: Product;
    ref?: Ref<HTMLDivElement>;
}

const wrapperVariant = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

const CheckoutProduct: React.FC<Props> = forwardRef(({ item }, ref) => {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket(item));
    };

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(item.deleteId));
    };

    return (
        <motion.div ref={ref} layout exit={{ scale: 0.8, opacity: 0 }} variants={wrapperVariant} className="my-4 flex">
            <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]">
                <Image src={item.image} width={150} height={150} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-around pl-2">
                <p>{item.title}</p>
                <p>${item.price}</p>
            </div>
            <div className="flex flex-col justify-around pr-2">
                <button onClick={addItemToBasket} className="group my-2 py-4 hover:font-bold ">
                    <span className="relative inline-block overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-[100%_50%] before:scale-x-0 before:bg-gray-700 before:transition-transform before:duration-300 before:ease-[cubic-bezier(.76,0,.24,1)] focus:before:origin-[0%_50%] focus:before:scale-x-100  group-hover:before:origin-[0%_50%] group-hover:before:scale-x-100">
                        add
                    </span>
                </button>
                <button onClick={removeItemFromBasket} className="group my-2 py-4 hover:font-bold ">
                    <span className="relative inline-block overflow-hidden before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-[100%_50%] before:scale-x-0 before:bg-gray-700 before:transition-transform before:duration-300 before:ease-[cubic-bezier(.76,0,.24,1)] focus:before:origin-[0%_50%] focus:before:scale-x-100  group-hover:before:origin-[0%_50%] group-hover:before:scale-x-100">
                        remove
                    </span>
                </button>
            </div>
        </motion.div>
    );
});

CheckoutProduct.displayName = 'CheckoutProduct';
export default CheckoutProduct;
