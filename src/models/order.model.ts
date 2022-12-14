import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { TOrder } from '../types/order.type';

const getAll = async (): Promise<TOrder[]> => {
  const [orders] = await connection.execute<RowDataPacket[] & TOrder[]>(
    `SELECT o.id, o.user_id, JSON_ARRAYAGG(p.order_id) 
      FROM Trybesmith.orders AS o INNER JOIN Trybesmith.products AS p GROUP BY o.id;`,
  );
  return orders;
};

export default { getAll };
