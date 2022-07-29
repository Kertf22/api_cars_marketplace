import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IAuthenticateUserDTO } from "../../DTOS/IAuthenticateUserDTO";
import { UserRepository } from "../../repositories/implementations/UsersRepository";

interface IAuthenticateUserUseCaseResponse {
    token: string;
};

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UserRepository")
        private UserRepository: UserRepository) { }

    async execute({ email, password }: IAuthenticateUserDTO): Promise<IAuthenticateUserUseCaseResponse> {

        const user = await this.UserRepository.findByEmail(email);

        if (!user) {
            throw new Error("Email / Password are incorrent!")
        }

        const passwordMatch = compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email / Password are incorrent!")
        };

        const token = sign({

        }, "car_api_key", {
            subject: user.id,
            expiresIn: "1d"
        });

        return { token };
    }
}

export { AuthenticateUserUseCase }