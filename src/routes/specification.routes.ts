import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const routes = Router();

routes.post("/", (req, res) => createSpecificationController.handle(req, res));

export { routes as specificationsRoutes };
