import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import { errorHandler } from "./errors";
import { routes } from "./routes";
import express from "express";

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler);

export default app;
