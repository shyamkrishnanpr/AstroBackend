import express, { Request, Response } from "express";
import { connectDatabase } from "./dbConnection";
import router from "./routes/router";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

app.use(cors());

app.use("/", router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
