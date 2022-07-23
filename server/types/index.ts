import { Document } from 'mongoose';

export interface User extends Document {
    name: string;
    main: string;
    password: string; 
}

export interface Product extends Document {
    name: string,
    thumbnail: string,
    gallery: [],
    characters: number[],
    season: number[],
    category: string,
    count: number,
    year: number,
    color: string,
    size: string,
    favorite: false,
    price: number,
    discount: number,
    shipping: number,
    rating: number,
}

export interface CartProduct extends Document {
    amount: number,
    product: Product,
    subTotal: number,
}

export interface Cart extends Document {
    userId: string,
    items: CartProduct[]
}
