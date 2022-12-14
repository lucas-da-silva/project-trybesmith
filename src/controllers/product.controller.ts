import { Request, Response } from 'express';
import productService from '../services/product.service';
import statusCodes from '../statusCodes';

const create = async (req: Request, res: Response) => {
  const newProduct = await productService.create(req.body);
  res.status(statusCodes.CREATED).json(newProduct);
};

const getAll = async (_req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(statusCodes.OK).json(products);
};

export default { create, getAll };