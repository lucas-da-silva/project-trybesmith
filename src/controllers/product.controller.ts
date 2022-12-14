import { Request, Response } from 'express';
import productService from '../services/product.service';
import statusCodes from '../statusCodes';

const create = async (req: Request, res: Response) => {
  const newProduct = await productService.create(req.body);
  res.status(statusCodes.CREATED).json(newProduct);
};

export default { create };