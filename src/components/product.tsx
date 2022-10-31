import Image from 'next/image';

interface ProductType {
    product: {
        id: number;
        title: string;
        price: number;
        category: string;
        image: string;
    };
}

const Product = ({ product }: ProductType) => {
    return (
        <div className="pb-6 md:pb-0" key={product.id}>
            <div className="cursor-pointer overflow-hidden">
                <Image
                    className="transition duration-150 ease-out hover:scale-125"
                    src={product.image}
                    alt={product.title}
                    width={800}
                    height={800}
                />
            </div>
            <div className="flex justify-between px-2">
                <p>{product.title}</p>
                <p className="font-bold">${product.price}</p>
            </div>
        </div>
    );
};

export default Product;
