import { Router } from 'express';
import orderController from '../controllers/order.controller';
import validateProductsIds from '../middlewares/order.middleware';
import validateToken from '../middlewares/token.middleware';

const router = Router();

router.get('/', orderController.getAll);
router.post('/', validateToken, validateProductsIds, orderController.create);

export default router;