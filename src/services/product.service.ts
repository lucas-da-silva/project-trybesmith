import productModel from '../models/product.model';
import { TProduct } from '../types/product.type';

const create = async (product: TProduct) => {
  const { name, amount } = product;
  const newProduct = await productModel.create(name, amount);
  return newProduct;
};

export default { create };