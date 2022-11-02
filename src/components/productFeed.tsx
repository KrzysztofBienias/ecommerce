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

interface TypeProps {
    children: React.ReactNode;
}

const ProductsCatagory = ({ children }: TypeProps) => (
    <h5 className="pt-20 pb-10 pl-2 text-4xl font-bold sm:text-6xl md:pr-4 md:text-7xl xl:text-8xl 2xl:pb-4 2xl:pr-0 2xl:text-9xl">
        {children}
    </h5>
);

const GridWrapper = ({ children }: TypeProps) => (
    <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 lg:grid-cols-3 lg:gap-4">{children}</div>
);

const ProductFeed = ({ products }: ProductType) => {
    return (
        <>
            <ProductsCatagory>Chairs</ProductsCatagory>
            <GridWrapper>
                {products
                    .filter((product) => product.category === 'Chair')
                    .map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
            </GridWrapper>

            <ProductsCatagory>Armchairs</ProductsCatagory>
            <GridWrapper>
                {products
                    .filter((product) => product.category === 'Armchair')
                    .map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
            </GridWrapper>

            <ProductsCatagory>Sofas</ProductsCatagory>
            <GridWrapper>
                {products
                    .filter((product) => product.category === 'Sofa')
                    .map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
            </GridWrapper>

            <ProductsCatagory>Tables</ProductsCatagory>
            <GridWrapper>
                {products
                    .filter((product) => product.category === 'Table')
                    .map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
            </GridWrapper>
        </>
    );
};

export default ProductFeed;

/* 
        <>
            <ProductsCatagory>Chairs</ProductsCatagory>
            <GridWrapper>
                {products
                    .filter((product) => product.category === 'Chair')
                    .map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
            </GridWrapper>

            <ProductsCatagory>Armchairs</ProductsCatagory>
            <GridWrapper>
                {products
                    .filter((product) => product.category === 'Armchair')
                    .map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
            </GridWrapper>

            <ProductsCatagory>Sofas</ProductsCatagory>
            <GridWrapper>
                {products
                    .filter((product) => product.category === 'Sofa')
                    .map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
            </GridWrapper>

            <ProductsCatagory>Tables</ProductsCatagory>
            <GridWrapper>
                {products
                    .filter((product) => product.category === 'Table')
                    .map((product) => (
                        <Product product={product} key={product.id} />
                    ))}
            </GridWrapper>
        </>
*/
