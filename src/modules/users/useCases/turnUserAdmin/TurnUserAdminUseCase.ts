import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw Error("User doesn't exists");
    }

    const changedUser = {
      ...user,
      admin: true,
    };

    return this.usersRepository.turnAdmin(changedUser);
  }
}

export { TurnUserAdminUseCase };
