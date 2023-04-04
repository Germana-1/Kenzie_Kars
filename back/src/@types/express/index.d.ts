import { IEmployer, IHired } from "./../../interface/users.interface";
import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        id?: string;
      };
    }
  }
}
