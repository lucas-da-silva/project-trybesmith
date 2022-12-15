import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';
import { TToken } from '../types/token.type';
import { verifyToken } from '../utils/jwtFunctions';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const decoded = verifyToken(token) as TToken;
    req.body.user = decoded.data;
    return next();
  } catch (err) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};

export default validateToken;