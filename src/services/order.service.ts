import orderModel from '../models/order.model';
import { TOrder } from '../types/order.type';

const getAll = async (): Promise<TOrder[]> => {
  const orders = await orderModel.getAll();
  return orders;
};

export default { getAll };