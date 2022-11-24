import Product from './product';
import type { ProductT } from '../types';

interface ProductsPreviewI {
    products: ProductT[];
}

const ProductsPreview: React.FC<ProductsPreviewI> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 xs:grid-rows-2 xs:gap-2 md:grid-cols-4 md:grid-rows-none">
            {products.slice(0, 4).map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductsPreview;
