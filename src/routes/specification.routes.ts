import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";

const routes = Router();

const specificationsRepository = new SpecificationsRepository();

routes.post("/specification", (req, res) => {
  const { name, description } = req.body;

  specificationsRepository.create({ name, description });

  return res.status(201).json();
});


export { routes as specificationsRoutes };
