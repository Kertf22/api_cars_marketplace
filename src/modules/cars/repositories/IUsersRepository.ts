

import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string;
    username: string;
    password: string;
    email: string;
    driver_liscense: string;
    admin: boolean;
}

interface IUsersRepository {

    create({ name, username, password, email, driver_liscense, admin }: ICreateUserDTO): Promise<void>;

    findByName(name: string): Promise<User>;

}


export { IUsersRepository, ICreateUserDTO }