import { Request, Response } from 'express';
import productService from '../services/product.service';

const create = async (req: Request, res: Response) => {
  const newProduct = await productService.create(req.body);
  res.status(201).json(newProduct);
};

export default { create };