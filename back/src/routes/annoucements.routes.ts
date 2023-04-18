import { Router } from "express";

import * as Middlewares from "../middlewares";
import * as Controller from "../controllers";
import * as Schema from "../schemas";

const annoucementsRoutes = Router();

annoucementsRoutes.get("/", Controller.getAllAnnouncementController);

annoucementsRoutes.post(
  "/",
  Middlewares.validateSchema(Schema.createAnnouncementSchema),
  Middlewares.verifyDuplicateAnnoucementMiddleware,
  Controller.createAnnouncementController
);

annoucementsRoutes.get(
  "/:id",
  Middlewares.verifyNotExistAnnoucementMiddleware,
  Controller.getOneAnnouncementController
);

annoucementsRoutes.patch(
  "/:id",
  Middlewares.validateSchema(Schema.updateAnnouncementSchema),
  Middlewares.verifyNotExistAnnoucementMiddleware,
  Controller.updateAnnouncementController
);

annoucementsRoutes.delete(
  "/:id",
  Middlewares.verifyNotExistAnnoucementMiddleware,
  Controller.deleteAnnouncementController
);

export { annoucementsRoutes };
