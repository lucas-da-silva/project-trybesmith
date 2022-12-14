import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const create = async (
  username: string,
  vocation: string,
  level: number,
  password: string,
): Promise<void> => {
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );
};

export default { create };
