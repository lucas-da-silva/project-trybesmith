import userModel from '../models/user.model';
import { TUser } from '../types/user.type';
import { createToken } from '../utils/jwtFunctions';

const create = async (user: TUser): Promise<string> => {
  await userModel.create(user);
  const token = createToken(user.username);
  return token;
};

export default { create };