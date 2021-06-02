import Client from "../database";

//Type for users data
export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  passwordHash: string;
  registeredAt: Date;
};

export class UserStore {}
