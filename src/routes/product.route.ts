import { Router } from 'express';
import productController from '../controllers/product.controller';
import { validateName, validateAmount } from '../middlewares/product.middleware';

const router = Router();

router.get('/', productController.getAll);
router.post('/', validateName, validateAmount, productController.create);

export default router;