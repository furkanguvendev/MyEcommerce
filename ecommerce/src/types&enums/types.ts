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

export type Address = {
    id: number,
    user_id: number,
    title: string,
    name: string,
    surname: string,
    phone: string,
    city: string,
    district: string,
    neighborhood: string,
    address: null
}

export type CreditCard = {
    id: number,
    card_no: string,
    expire_month: number,
    expire_year: number,
    name_on_card: string,
}

export type CreditCardInput = Omit<CreditCard, "id">;

export type OrderProduct = {
    product_id: number,
    count: number,
    detail: string
}

export type LastOrder = {
    address_id: number,
    order_date: string,
    card_no: number,
    card_name: string,
    card_expire_month: number,
    card_expire_year: number,
    card_ccv: number,
    price: number,
    products: OrderProduct[],
}