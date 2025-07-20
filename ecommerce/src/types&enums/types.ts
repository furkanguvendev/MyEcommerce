export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    store_id: number;
    category_id: number;
    rating: number;
    sell_count: number;
    images: [
        {
            url: string;
            index: number;
        }
    ];
}

export type Category = {
    id: number;
    code: string;
    title: string;
    img: string;
    rating: number;
    gender: string;
}