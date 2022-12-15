import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { TOrder } from '../types/order.type';

const getAll = async (): Promise<TOrder[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & TOrder[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds 
    FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
    GROUP BY o.id;`,
  );
  return orders;
};

const create = async ({ userId, productsIds }: TOrder): Promise<TOrder> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders(user_id) VALUES(?);',
    [userId],
  );
  await Promise.all(productsIds.map(async (id) => connection.execute(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?;',
    [insertId, id],
  )));
  return { userId, productsIds };
};

export default { getAll, create };
