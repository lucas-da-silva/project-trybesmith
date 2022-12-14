import productModel from '../models/product.model';
import { TProduct } from '../types/product.type';

const create = async (product: TProduct): Promise<TProduct> => {
  const { name, amount } = product;
  const newProduct = await productModel.create(name, amount);
  return newProduct;
};

const getAll = async (): Promise<TProduct[]> => {
  const products = await productModel.getAll();
  return products;
};

export default { create, getAll };