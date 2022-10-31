import Product from './product';

interface ProductType {
    products: {
        id: number;
        title: string;
        price: number;
        category: string;
        image: string;
    }[];
}

const ProductsPreview = ({ products }: ProductType) => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 xs:grid-rows-2 xs:gap-2 md:grid-cols-4 md:grid-rows-none">
            {products.slice(0, 4).map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductsPreview;
