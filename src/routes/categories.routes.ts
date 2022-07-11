import { Router } from "express";
import multer from "multer";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const routes = Router();


const upload = multer({
    dest: "./tmp"
}); 

routes.post("/", createCategoryController.handle);

routes.get("/", listCategoryController.handle);

routes.post("/import", upload.single("file"), categoryUpload)
export { routes as catergoriesRoutes };
