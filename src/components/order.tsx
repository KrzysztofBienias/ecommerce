import Image from 'next/image';
import moment from 'moment';
import { motion } from 'framer-motion';

interface OrderI {
    amount: number;
    images: string[];
    items: number;
    timestamp: number;
}

const orderVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.2 } },
};

const orderInfoVariant = {
    hidden: { y: 50 },
    show: { y: 0, transition: { staggerChildren: 0.1, duration: 0.4 } },
};

const orderInfoItemVariant = {
    hidden: { y: 50 },
    show: { y: 0, transition: { duration: 0.4 } },
};

const imageWrapperVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const imageVariant = {
    hidden: { y: 50 },
    show: { y: 0 },
};

const Order: React.FC<OrderI> = ({ amount, images, items, timestamp }) => {
    return (
        <motion.div
            variants={orderVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="my-4 rounded-md border"
        >
            <motion.div
                variants={orderInfoVariant}
                className="flex items-center space-x-5 bg-gray-100 p-5 text-sm text-gray-600 sm:space-x-10"
            >
                <motion.div variants={orderInfoItemVariant}>
                    <p className="text-xs font-bold">ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
                </motion.div>
                <motion.div variants={orderInfoItemVariant} className="self-start">
                    <p className="text-xs font-bold">TOTAL</p>
                    <p>${amount}</p>
                </motion.div>
                <motion.p
                    variants={orderInfoItemVariant}
                    className="flex-1 self-start whitespace-nowrap text-right text-sm sm:text-xl"
                >
                    {items} items
                </motion.p>
            </motion.div>

            <motion.div
                variants={imageWrapperVariant}
                className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap p-4 sm:p-10"
            >
                {images.map((image, index) => (
                    <motion.div variants={imageVariant} className="mx-1 h-[150px] w-[150px]" key={index}>
                        <Image src={image} alt="" width={150} height={150} key={index} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Order;
