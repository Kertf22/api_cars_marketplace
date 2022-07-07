import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const routes = Router();

const categoriesRepository = new CategoriesRepository();

routes.post("/categories", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).json();
});

routes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.status(201).json(all);
});

export { routes as catergoriesRoutes };
