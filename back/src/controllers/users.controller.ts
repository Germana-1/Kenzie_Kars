import { Request, Response } from "express";

import * as Service from "../services";

export const createUserController = async (req: Request, res: Response) => {
  const data = await Service.createUserService(req.body);
  return res.status(201).json(data);
};
