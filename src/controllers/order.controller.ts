import { Request, Response } from 'express';
import orderService from '../services/order.service';
import statusCodes from '../statusCodes';

const getAll = async (_req: Request, res: Response) => {
  const orders = await orderService.getAll();
  res.status(statusCodes.OK).json(orders);
};

const create = async (req: Request, res: Response) => {
  const { id: userId, productsIds } = req.body;
  const newOrder = await orderService.create({ userId, productsIds });
  res.status(statusCodes.CREATED).json(newOrder); 
};

export default { getAll, create };