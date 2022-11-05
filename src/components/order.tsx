import Image from 'next/image';
import img from '../images/content1.jpg';

const images = [img, img, img, img, img, img];

const Order = () => {
    return (
        <div className="my-4 rounded-md border">
            <div className="flex items-center space-x-5 bg-gray-100 p-5 text-sm text-gray-600 sm:space-x-10">
                <div>
                    <p className="text-xs font-bold">ORDER PLACED</p>
                    <p>04 Nov 2022</p>
                </div>
                <div className="self-start">
                    <p className="text-xs font-bold">TOTAL</p>
                    <p>$885.59</p>
                </div>
                <p className="flex-1 self-start whitespace-nowrap text-right text-sm sm:text-xl">8 items</p>
            </div>

            <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap p-4 sm:p-10">
                {images.map((image, index) => (
                    <Image src={image} alt="" width={150} height={150} objectFit="contain" key={index} />
                ))}
            </div>
        </div>
    );
};

export default Order;
