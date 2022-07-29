import { Router } from "express";
import { catergoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specification.routes";
import { usersRoutes } from "./user.routes"
const router = Router();

router.use("/categories", catergoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/user", usersRoutes)
export { router };
