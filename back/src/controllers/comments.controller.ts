import { Request, Response } from "express";
import * as Service from "../services";

export const createCommentController = async (req: Request, res: Response) => {
  const userId: string = req.authUser.id;
  const announcementId: string = req.params.announcementId;
  const { comment } = req.body;
  const data = await Service.createCommentService(
    comment,
    userId,
    announcementId
  );
  return res.status(201).json(data);
};
