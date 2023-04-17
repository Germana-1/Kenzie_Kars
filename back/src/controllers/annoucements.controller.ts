import * as Service from "../services";

import { Request, Response } from "express";

export const createAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.createAnnoucementService(req.body);
  return res.status(201).json(data);
};

export const getAllAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.getAllAnnoucementsService();
  return res.json(data);
};

export const getOneAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.getOneAnnoucementService(req.params.id);
  return res.json(data);
};

export const updateAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.updateAnnoucementService(req.params.id, req.body);
  return res.json(data);
};

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.deleteAnnoucementService(req.params.id);
  return res.status(204).json(data);
};
