export type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    deleteId?: string;
};

export type Order = {
    id: string;
    amount: number;
    amountShipping: number;
    images: string[];
    timestamp: number;
};

export type GroupedProducts = {
    [category: string]: Product[];
};
