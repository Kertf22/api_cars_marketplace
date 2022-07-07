import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  //   private categoriesRepository: ICategoriesRepository;

  //   constructor(categoriesRepository: CategoriesRepository) {
  //     this.categoriesRepository = categoriesRepository;
  //   }

  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExist) {
      throw new Error("Category already exist!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
