import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { TProduct } from '../types/product.type';

const create = async (name: string, amount: string): Promise<TProduct> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  return { id: insertId, name, amount };
};

export default { create };