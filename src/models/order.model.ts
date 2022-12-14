import { RowDataPacket } from 'mysql2';
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

export default { getAll };
