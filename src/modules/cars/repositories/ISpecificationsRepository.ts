import { Specification } from "../models/Specification";

interface ICreateSpeficicationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {

  create({ name, description }: ICreateSpeficicationDTO): void;

  find(name:string) : Specification;

}


export {ISpecificationsRepository, ICreateSpeficicationDTO}