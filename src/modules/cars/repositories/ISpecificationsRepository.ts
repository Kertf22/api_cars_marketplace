import { ICreateSpeficicationDTO } from "../DTOS/ICreateSpeficicationDTO";
import { Specification } from "../entities/Specification";


interface ISpecificationsRepository {

  create({ name, description }: ICreateSpeficicationDTO): Promise<void>;

  findByName(name: string): Promise<Specification>;

}


export { ISpecificationsRepository }