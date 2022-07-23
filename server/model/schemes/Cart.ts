import mongoose from 'mongoose';
import { productSchema } from './Product';
import { Cart, CartProduct } from '../../types';


const cartProductSchema = new mongoose.Schema<CartProduct>({
    amount: Number,
    product: productSchema,
    subTotal: Number
})

const cartSchema = new mongoose.Schema<Cart>({
    userId: String,
    items: [cartProductSchema],
})

const cartModel = mongoose.model('cart', cartSchema);

export default cartModel;
