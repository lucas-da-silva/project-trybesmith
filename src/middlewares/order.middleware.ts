import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';

const validateProductsIds = async (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) {
    return res
      .status(statusCodes.BAD_REQUEST)
      .json({ message: '"productsIds" is required' });
  }
  if (!Array.isArray(productsIds)) {
    return res
      .status(statusCodes.UNPROCESSABLE)
      .json({ message: '"productsIds" must be an array' });
  }
  if (!productsIds.length) {
    return res
      .status(statusCodes.UNPROCESSABLE)
      .json({ message: '"productsIds" must include only numbers' });
  }
  next();
};

export default validateProductsIds;
