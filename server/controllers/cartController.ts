import { Request, Response } from 'express';
import ApiError from '../Error';
import Cart from '../services/Cart';


class cartController {
    async create(req: Request, res: Response, next: any) {
        const { id } = req.body.user;

        await Cart.create({ userId: id, items: [], subTotal: 0 });

        res.json({ message: 'cart created' });
    }

    async getCart(req: Request, res: Response, next: any) {
        const { id } = req.body.user;

        const cart = await Cart.getCart(id);

        if (!cart) {
            const createCart = await Cart.create({ userId: id, items: [], subTotal: 0 })
            
            res.json({ message: 'GET CART', payload: createCart });

            return;
        }

        res.json({ message: 'GET CART', payload: cart });
    }

    async addItem(req: Request, res: Response, next: any) {
        const { user } = req.body;
        const productId = req.params.id;

        await Cart.add(productId, user.id)

        const cart = await Cart.getCart(user.id)

        res.json({ message: 'Item successfully added', payload: cart })
    }

    async removeItem(req: Request, res: Response, next: any) {
        const { id } = req.body.user;
        
        await Cart.remove(id, req.params.id);

        const cart = await Cart.getCart(id);
        
        res.json({ message: 'item removed', payload: cart });
    }

    async emptyCart(req: Request, res: Response, next: any) {
        const { id } = req.body.user;

        const cart = await Cart.emptyCart(id);

        res.json({ message: 'Empty', payload: cart });
    }
}

export default cartController;
