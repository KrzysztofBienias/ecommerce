import React from 'react';
import Image from 'next/image';
import img from '../images/content1.jpg';

const CheckoutProduct = () => {
    return (
        <div className="my-4 flex">
            <div className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]">
                <Image src={img} width={150} height={150} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-around pl-2">
                <p>title</p>
                <p>$100</p>
            </div>
            <div className="flex flex-col justify-around pr-2">
                <button className="p-2 hover:italic">add</button>
                <button className="p-2 hover:italic">remove</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
