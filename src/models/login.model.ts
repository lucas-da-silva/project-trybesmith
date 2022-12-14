import { RowDataPacket } from 'mysql2';
import { TUser } from '../types/user.type';
import connection from './connection';

const getUser = async (username: string, password: string): Promise<TUser> => {
  const [[user]] = await connection.execute<RowDataPacket[] & TUser[]>(
    'SELECT * FROM Trybesmith.users WHERE username=? AND password=?;',
    [username, password],
  );
  return user;
};

export default { getUser };