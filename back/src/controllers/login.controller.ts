import * as Service from "../services";
import { Request, Response } from "express";

export interface IUserLogin {
  email: string;
  password: string;
}

export const loginCrontroller = async (req: Request, res: Response) => {
  const userLogin: IUserLogin = req.body;
  const token = await Service.loginService(userLogin);
  return res.json({ token });
};
