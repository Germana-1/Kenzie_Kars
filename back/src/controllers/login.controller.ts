import { Request, Response } from "express";
import * as Service from "../services";
import { IUserSession } from "../interfaces";

export const loginCrontroller = async (req: Request, res: Response) => {
  const userLogin: IUserSession = req.body;
  const token = await Service.loginService(userLogin);
  return res.json({ token });
};
