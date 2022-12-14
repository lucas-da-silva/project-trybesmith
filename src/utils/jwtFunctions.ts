import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'mySecret';

type TData = string | { id: number, username: string };

const createToken = (data: TData, expiresIn = '1h'): string => {
  const token = jwt.sign({ data }, SECRET, { algorithm: 'HS256', expiresIn });
  return token;
};

const verifyToken = (token: string) => jwt.verify(token, SECRET);

export { createToken, verifyToken };
