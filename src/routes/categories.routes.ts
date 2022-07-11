import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const routes = Router();

const upload = multer({
  dest: "./tmp",
});

routes.post("/", createCategoryController.handle);

routes.get("/", listCategoryController.handle);

routes.post("/import", upload.single("file"), importCategoryController.handle);
export { routes as catergoriesRoutes };
