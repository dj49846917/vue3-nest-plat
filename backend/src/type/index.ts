export type UserDto = {
  username: string;
  password: string;
  role: string;
  nickname: string;
  active: number;
  avatar: string;
}

export type UserTable = UserDto & {
  id: number
}