import { Router } from "express";

import * as Middlewares from "../middlewares";
import * as Controller from "../controllers";
import * as Schema from "../schemas";

const usersRoutes = Router();

usersRoutes.post(
  "",
  Middlewares.validateSchema(Schema.createUserRequestSchema),
  Middlewares.verifyDuplicateUserMiddleware,
  Controller.createUserController
);

export { usersRoutes };
