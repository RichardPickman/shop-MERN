import cartModel from '../model/schemes/Cart';
import productModel from '../model/schemes/Product';
import { CartProduct } from '../types';


class cartService {
    async create(payload: { [k: string]: any }) {
        await new cartModel(payload).save().then(() => console.log('Cart created'));

        const getCreatedCart = await this.getCart(payload.userId);

        return getCreatedCart;
    }

    async getCart(userId: string) {
        const [findCart] = await cartModel.find({ userId: userId });

        return findCart;
    }

    async add(productId: any, userId: string) {
        const [findItem] = await productModel.find({ _id: productId });
        const [findUserCart] = await cartModel.find({ userId: userId });
        const product = findUserCart.items.find((item) => item.product?.id === productId);

        if (product) {
            product.amount += 1;
            const calculateTotal = (product.product?.price * product.amount).toFixed(2);
            product.subTotal = Number(calculateTotal);
        } else {
            findUserCart.items.push({ amount: 1, product: findItem, subTotal: findItem.price } as CartProduct);
        }

        await findUserCart.save();

        return findUserCart;
    }

    async remove(id: string, productId: string) {
        const [findUserCart] = await cartModel.find({ userId: id });
        const product = findUserCart.items.find((item) => item.product?.id === productId) as CartProduct;

        if (!product) {
            return;
        }

        if (product.amount > 1) {
            product.amount -= 1;
            const calculateTotal = (product.product?.price * product.amount).toFixed(2);
            product.subTotal = Number(calculateTotal);
        } else {
            product?.remove();
        }

        await findUserCart.save();

        return findUserCart;
    }

    async emptyCart(userId: string) {
        const getCart = await this.getCart(userId);

        getCart.items = [];

        console.log(getCart);

        await getCart.save();

        return getCart;
    }
}

const Cart = new cartService();

export default Cart;
