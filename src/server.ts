import express from "express";
import { router } from "./routes/index.routes";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "./swagger.json"

import "./database"
const app = express();
app.use(express.json());

app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = 3333;
app.listen(PORT, () => console.log(`API runing in http://localhost:${PORT}`));
console.log("Foi a sd sdaa a a")
// catergoriesRoutes
