import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'mySecret';

const createToken = (data: string, expiresIn = '1h'): string => {
  const token = jwt.sign({ data }, SECRET, { algorithm: 'HS256', expiresIn });
  return token;
};

const verifyToken = (token: string) => jwt.verify(token, SECRET);

export { createToken, verifyToken };
