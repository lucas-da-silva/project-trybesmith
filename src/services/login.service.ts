import loginModel from '../models/login.model';
import { TInvalid, TValid } from '../types/response.type';
import { TLogin } from '../types/user.type';
import { createToken } from '../utils/jwtFunctions';

const login = async (user: TLogin): Promise<TValid | TInvalid> => {
  const existedUser = await loginModel.getUser(user);
  if (!existedUser.id) { 
    return { type: 'UNAUTHORIZED', message: 'Username or password invalid' }; 
  }
  const token = createToken({ id: existedUser.id, username: user.username });
  return { type: null, message: token };
};

export default { login };
