import { Request, Response } from 'express';
import loginService from '../services/login.service';
import statusCodes from '../statusCodes';

const login = async (req: Request, res: Response) => {
  const { type, message } = await loginService.login(req.body);
  if (type) return res.status(statusCodes.UNAUTHORIZED).json({ message });
  res.status(statusCodes.OK).json({ token: message });
};

export default { login };