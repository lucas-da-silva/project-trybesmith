import { Request, Response } from 'express';
import userService from '../services/user.service';
import statusCodes from '../statusCodes';

const create = async (req: Request, res: Response) => {
  const token = await userService.create(req.body);
  res.status(statusCodes.CREATED).json({ token });
};

export default { create };