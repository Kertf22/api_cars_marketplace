import { AppDataSource } from "../../../../database/data-source";
import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UserRepository implements IUsersRepository {

    private repository = AppDataSource.getRepository(User);

    create({ name, username, password, email, driver_liscense, admin }: ICreateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    };

    findByName(name: string): Promise<User> {
        throw new Error("Method not implemented.");
    };

}

export { UserRepository }