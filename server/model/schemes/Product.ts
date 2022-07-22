import mongoose from "mongoose";
import { ImageSchema } from './Image'

interface Product {
    name: string,
    thumbnail: typeof ImageSchema,
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

const productSchema = new mongoose.Schema<Product>({
    name: String,
    thumbnail: String,
    gallery: Array,
    characters: [Number],
    season: [Number],
    category: String,
    count: Number,
    year: Number,
    color: String,
    size: String,
    favorite: false,
    price: Number,
    discount: Number,
    shipping: Number,
    rating: Number,
})

const productModel = mongoose.model('products', productSchema)

export default productModel;
