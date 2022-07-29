import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ListCategoryController } from "../modules/cars/useCases/listCategory/ListCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";

const routes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController()
const importCategoryController = new ImportCategoryController();


routes.post("/", createCategoryController.handle);

routes.get("/", listCategoryController.handle);

routes.post("/import", upload.single("file"), importCategoryController.handle);
export { routes as catergoriesRoutes };
