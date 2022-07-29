import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const routes = Router();

const createSpecificationController = new CreateSpecificationController();

routes.post("/", createSpecificationController.handle);

export { routes as specificationsRoutes };
