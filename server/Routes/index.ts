import Router from 'express';
import characterRouter from './characterRouter';
import itemRouter from './itemRouter';
import userRouter from './userRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/items', itemRouter);
router.use('/characters', characterRouter);

export default router;
