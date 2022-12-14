import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { TProduct } from '../types/product.type';

const create = async (name: string, amount: string): Promise<TProduct> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?);',
    [name, amount],
  );
  return { id: insertId, name, amount };
};

const getAll = async (): Promise<TProduct[]> => {
  const [products] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT * FROM Trybesmith.products;',
  );
  return products;
};

export default { create, getAll };
