import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const routes = Router();

routes.post("/", createSpecificationController.handle);

export { routes as specificationsRoutes };
