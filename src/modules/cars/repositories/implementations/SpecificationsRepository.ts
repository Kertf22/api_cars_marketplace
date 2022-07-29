import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";
import { Specification } from "../../entities/Specification";
import {
  ICreateSpeficicationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {

  private repository: Repository<Specification> = AppDataSource.getRepository(Specification);

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({
      where: {
        name: name

      }
    })
    console.log(specification)
    return specification;
  }

  async create({ name, description }: ICreateSpeficicationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description
    })

    await this.repository.save(specification);
  }
}

export { SpecificationsRepository };
