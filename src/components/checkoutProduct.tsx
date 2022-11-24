import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../redux/slices/basksetSlice';
import type { ProductT } from '../types';

interface CheckoutProductI {
    item: ProductT;
}

const CheckoutProduct: React.FC<CheckoutProductI> = ({ item }) => {
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket(item));
    };

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket(item.id));
    };

    return (
        <div className="my-4 flex">
            <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]">
                <Image src={item.image} width={150} height={150} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-around pl-2">
                <p>{item.title}</p>
                <p>${item.price}</p>
            </div>
            <div className="flex flex-col justify-around pr-2">
                <button onClick={addItemToBasket} className="p-2 hover:italic">
                    add
                </button>
                <button onClick={removeItemFromBasket} className="p-2 hover:italic">
                    remove
                </button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
