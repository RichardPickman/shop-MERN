import mongoose, { Document } from "mongoose";
import { Product } from '../../types';

export const productSchema = new mongoose.Schema<Product>({
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
    favorite: Boolean,
    price: Number,
    discount: Number,
    shipping: Number,
    rating: Number,
})

const productModel = mongoose.model('products', productSchema)

export default productModel;
