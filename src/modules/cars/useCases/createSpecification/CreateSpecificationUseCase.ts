import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExist) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
