import { annoucementsRoutes } from "./annoucements.routes";
import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { loginRoutes } from "./login.routes";

const routes = Router();

routes.use("/annoucements", annoucementsRoutes);
routes.use("/users", usersRoutes);
routes.use("/login", loginRoutes);

export { routes };
