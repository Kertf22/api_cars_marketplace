import { Specification } from "../models/Specification";
import {
  ICreateSpeficicationDTO,
  ISpecificationsRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  find(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    
    return specification;
  }

  create({ name, description }: ICreateSpeficicationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
