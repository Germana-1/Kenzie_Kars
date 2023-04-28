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

export const updateUserController = async (req: Request, res: Response) => {
  const data = await Service.updateUserService(req);
  return res.json(data);
};

export const updateUserAddressController = async (
  req: Request,
  res: Response
) => {
  const data = await Service.updateUserAddressService(req);
  return res.json(data);
};
