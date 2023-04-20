import { Request, Response } from "express";

import * as Service from "../services";

export const createUserController = async (req: Request, res: Response) => {
  const data = await Service.createUserService(req.body);
  return res.status(201).json(data);
};

export const getOneUserController = async (req: Request, res: Response) => {
  const data = await Service.getOneUserService(req.authUser.id);
  return res.json(data);
};
