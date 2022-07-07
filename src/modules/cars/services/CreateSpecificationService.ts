import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specifipationRepository: ISpecificationsRepository) {}
  
  execute({ name, description }: IRequest) {

    const specificationAlreadyExist = this.specifipationRepository.find(name);

    if(specificationAlreadyExist){
      throw new Error("Specification already exist.")
    }
    
    this.specifipationRepository.create({ name, description});
  }
}

export { CreateSpecificationService };
