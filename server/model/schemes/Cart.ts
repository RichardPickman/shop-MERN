import mongoose from 'mongoose';
import productModel from './Product';


const cartSchema = new mongoose.Schema({
    items: [productModel],
    subTotal: Number,
})
