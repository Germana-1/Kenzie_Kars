import { annoucementsRoutes } from "./annoucements.routes";
import { Router } from "express";

const routes = Router();

routes.use("/annoucements", annoucementsRoutes);

export { routes };
