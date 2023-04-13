import { Router } from "express";

import * as Middlewares from "../middlewares";
import * as Controller from "../controllers";
import * as Schema from "../schemas";

const annoucementsRoutes = Router();

annoucementsRoutes.get("/", Controller.getAllAnnoucementController);

annoucementsRoutes.post(
    "/",
    Middlewares.validateSchema(Schema.createAnnoucementSchema),
    Middlewares.verifyDuplicateAnnoucementMiddleware,
    Controller.createAnnoucementController
);

annoucementsRoutes.get(
    "/:id",
    Middlewares.verifyNotExistAnnoucementMiddleware,
    Controller.getOneAnnoucementController
);

annoucementsRoutes.patch(
    "/:id",
    Middlewares.validateSchema(Schema.updateAnnoucementSchema),
    Middlewares.verifyNotExistAnnoucementMiddleware,
    Controller.updateAnnoucementController
);

annoucementsRoutes.delete(
    "/:id",
    Middlewares.verifyNotExistAnnoucementMiddleware,
    Controller.deleteAnnoucementController
);

export { annoucementsRoutes };
