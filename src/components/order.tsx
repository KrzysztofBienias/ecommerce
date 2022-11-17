import Image from 'next/image';
import moment from 'moment';

interface OrderT {
    amount: number;
    images: string[];
    items: any;
    timestamp: number;
}

const Order: React.FC<OrderT> = ({ amount, images, items, timestamp }) => {
    return (
        <div className="my-4 rounded-md border">
            <div className="flex items-center space-x-5 bg-gray-100 p-5 text-sm text-gray-600 sm:space-x-10">
                <div>
                    <p className="text-xs font-bold">ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
                </div>
                <div className="self-start">
                    <p className="text-xs font-bold">TOTAL</p>
                    <p>${amount}</p>
                </div>
                <p className="flex-1 self-start whitespace-nowrap text-right text-sm sm:text-xl">{items.length} items</p>{' '}
            </div>

            <div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap p-4 sm:p-10">
                {images.map((image, index) => (
                    <div className="mx-1 h-[150px] w-[150px]" key={index}>
                        <Image src={image} alt="" width={150} height={150} key={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Order;
