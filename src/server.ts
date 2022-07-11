import express from "express";
import { router } from "./routes/index.routes";

const app = express();
app.use(express.json());
 
app.use(router)

const PORT = 3333;
app.listen(PORT, () => console.log(`API runing in http://localhost:${PORT}`));
// catergoriesRoutes
