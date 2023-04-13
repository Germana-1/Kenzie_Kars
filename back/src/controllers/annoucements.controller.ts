import { Request, Response } from "express";

import * as Service from "../services/annoucements.service";

export const createAnnoucementController = async (
    req: Request,
    res: Response
) => {
    const data = await Service.createAnnoucementService(req.body);
    return res.status(201).json(data);
};

export const getAllAnnoucementController = async (
    req: Request,
    res: Response
) => {
    const data = await Service.getAllAnnoucementsService();
    return res.json(data);
};

export const getOneAnnoucementController = async (
    req: Request,
    res: Response
) => {
    const data = await Service.getOneAnnoucementService(req.params.id);
    return res.json(data);
};

export const updateAnnoucementController = async (
    req: Request,
    res: Response
) => {
    const data = await Service.updateAnnoucementService(
        req.params.id,
        req.body
    );
    return res.json(data);
};

export const deleteAnnoucementController = async (
    req: Request,
    res: Response
) => {
    const data = await Service.deleteAnnoucementService(req.params.id);
    return res.status(204).json(data);
};
