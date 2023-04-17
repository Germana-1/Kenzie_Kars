import { annoucementsRoutes } from "./annoucements.routes";
import { Router } from "express";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/annoucements", annoucementsRoutes);
routes.use("/users", usersRoutes);

export { routes };
