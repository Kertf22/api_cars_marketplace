import express from "express";
import { catergoriesRoutes } from "./routes/categories.routes";

const app = express();
app.use(express.json());
app.use(catergoriesRoutes);

const PORT = 3333;
app.listen(PORT, () => console.log(`API runing in http://localhost:${PORT}`));
// catergoriesRoutes
