export type ProductT = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
};

export type OrderT = {
    id: string;
    amount: number;
    amountShipping: number;
    images: string[];
    items: any;
    timestamp: number;
};

export type GroupedProducts = {
    [category: string]: ProductT[];
};
