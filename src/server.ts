import "reflect-metadata"
import express from "express";
import cors from "cors"
import { router } from "./routes/index.routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json"
import "./database";
import "./shared/container";


const app = express();
app.use(express.json());
app.use(cors())
app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = 3333;
app.listen(PORT, () => console.log(`API runing in http://localhost:${PORT}`));
// catergoriesRoutes
