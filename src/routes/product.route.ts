import { Router } from 'express';
import productController from '../controllers/product.controller';
import { validateName, validateAmount } from '../middlewares/product.middleware';

const router = Router();

router.post('/', validateName, validateAmount, productController.create);
router.get('/', productController.getAll);

export default router;