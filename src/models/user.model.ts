import { ResultSetHeader } from 'mysql2';
import { TUser } from '../types/user.type';
import connection from './connection';

const create = async ({ username, vocation, level, password }: TUser): Promise<void> => {
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );
};

export default { create };
