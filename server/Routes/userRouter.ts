import Router, { Request, Response } from 'express';
import userController from '../controllers/userController';
import JwtMiddleware from '../middleware/Token'

const user = new userController();
const router = Router()

router.post('/registration', user.registration);
router.post('/login', user.login);
router.get('/auth', JwtMiddleware, user.check);

export default router;
