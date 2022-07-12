import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const routes = Router();

const upload = multer({
  dest: "./tmp",
});

routes.post("/", (req, res) => createCategoryController.handle(req, res));

routes.get("/", (req, res) => listCategoryController.handle(req, res));

routes.post("/import", upload.single("file"), (req, res) =>
  importCategoryController.handle(req, res)
);
export { routes as catergoriesRoutes };
