import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../DTOS/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(@inject("UserRepository") private UserRepostory: IUsersRepository) { }

    async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {

        const userAlreadyExist = await this.UserRepostory.findByEmail(email);

        if (userAlreadyExist) {
            throw new Error("User already Exist!");
        }

        const cryptedPassword = await hash(password, 10)

        await this.UserRepostory.create({ name, password: cryptedPassword, email, driver_license })

    }
}

export { CreateUserUseCase }
