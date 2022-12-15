import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';
import { verifyToken } from '../utils/jwtFunctions';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
  next();
};

export default validateToken;