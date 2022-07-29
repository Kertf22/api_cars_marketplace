import { AppDataSource } from "../../../../database/data-source";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../DTOS/ICreateUserDTO";

class UserRepository implements IUsersRepository {

    private repository = AppDataSource.getRepository(User);

    async create({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {

        const user = this.repository.create({ name, password, email, driver_license })


        await this.repository.save(user);
    };

    async findByEmail(email: string): Promise<User> {

        const user = await this.repository.findOneBy({
            email: email
        })

        return user;
    };

}

export { UserRepository }