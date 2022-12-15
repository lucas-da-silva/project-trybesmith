import { Router } from 'express';
import orderController from '../controllers/order.controller';
import validateToken from '../middlewares/token.middleware';

const router = Router();

router.get('/', orderController.getAll);
router.post('/', validateToken, orderController.create);

export default router;