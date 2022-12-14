import { Request, Response } from 'express';
import orderService from '../services/order.service';
import statusCodes from '../statusCodes';

const getAll = async (_req: Request, res: Response) => {
  const orders = await orderService.getAll();
  res.status(statusCodes.OK).json(orders);
};

export default { getAll };