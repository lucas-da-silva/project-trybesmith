export type TLogin = {
  username: string;
  password: string;
};

export type TUser = {
  id?: number;
  vocation: string;
  level: number;
} & TLogin;
