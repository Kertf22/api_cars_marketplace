import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute(file: Express.Multer.File ) : void {

  }
}

export { ImportCategoryUseCase };
