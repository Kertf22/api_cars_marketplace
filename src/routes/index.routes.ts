import { Router } from "express";
import { catergoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specification.routes";

const router = Router();

router.use("/categories", catergoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
