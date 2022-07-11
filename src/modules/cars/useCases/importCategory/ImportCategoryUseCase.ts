import fs from "fs";
import { parse } from "csv-parse";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = parse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
