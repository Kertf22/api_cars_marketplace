import { Router } from "express";
import Category from "../models/Categories";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const routes = Router();

const categoriesRepository = new CategoriesRepository();

routes.post("/categories", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExist = categoriesRepository.findByName(name);

  if (categoryAlreadyExist) {
    return res.status(400).json({ error: "Category Already exist" });
  }

  categoriesRepository.create({ name, description });

  return res.status(201).json();
});

routes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.status(201).json(all);
});
export { routes as catergoriesRoutes };
