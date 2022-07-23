import Router from 'express';
import cartController from '../controllers/cartController';
import JwtMiddleware from '../middleware/Token';

const controller = new cartController();
const router = Router();

router.put('/:id', JwtMiddleware, controller.addItem);

router.get('/', JwtMiddleware, controller.getCart)

router.delete('/remove/:id', JwtMiddleware, controller.removeItem);

router.delete('/empty', JwtMiddleware, controller.emptyCart);

export default router;
