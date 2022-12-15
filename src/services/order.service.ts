import orderModel from '../models/order.model';
import { TOrder } from '../types/order.type';

const getAll = async (): Promise<TOrder[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

const create = async (order: TOrder): Promise<TOrder> => {
  const newOrder = await orderModel.create(order);
  return newOrder;
};

export default { getAll, create };