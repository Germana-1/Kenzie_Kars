import * as Service from "../services";

import { Request, Response } from "express";

export const createAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.createAnnouncementService(req);
  return res.status(201).json(data);
};

export const getAllAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.getAllAnnouncementsService();
  return res.json(data);
};

export const getOneAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.getOneAnnouncementService(req.params.id);
  return res.json(data);
};

export const updateAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.updateAnnouncementService(req.params.id, req.body);
  return res.json(data);
};

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.deleteAnnouncementService(req.params.id);
  return res.status(204).json(data);
};
