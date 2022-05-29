import { User } from "../model/User";

interface ICreateUserDTO {
  id?: string;

  name: string;

  admin?: boolean;

  email: string;

  created_at?: Date;

  updated_at?: Date;
}

interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): User;
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  turnAdmin(user: User): User;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
