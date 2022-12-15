import { Router } from 'express';
import userController from '../controllers/user.controller';
import { 
  validateUsername,
  validateVocation,
  validateLevel,
  validatePassword,
} from '../middlewares/user.middleware';

const router = Router();

router.post(
  '/', 
  validateUsername,
  validateVocation,
  validateLevel,
  validatePassword, 
  userController.create,
);

export default router;