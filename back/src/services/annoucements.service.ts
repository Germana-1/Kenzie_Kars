import { Announcement } from "@prisma/client";

import { prisma } from "../database";
import * as Interfaces from "../interfaces";
import * as Utils from "../utils";

export const getAllAnnoucementsService = async () => {
  return await prisma.announcement.findMany({
    select: Utils.getAllAnnoucementsOptions,
  });
};

export const createAnnoucementService = async (
  body: Announcement
): Promise<Announcement> => {
  return prisma.announcement.create({
    data: {
      ...body,
    },
    include: {
      user: {
        select: Utils.responseBodyUser,
      },
    },
  });
};

export const getOneAnnoucementService = async (
  id: string
): Promise<Announcement> => {
  return await prisma.announcement.findFirst({
    where: {
      id,
    },
    include: {
      user: {
        select: Utils.responseBodyUser,
      },
    },
  });
};

export const updateAnnoucementService = async (
  id: string,
  body: Interfaces.IUpdateAnnoucementRequest
): Promise<Announcement> => {
  return await prisma.announcement.update({
    where: {
      id,
    },
    data: body,
  });
};

export const deleteAnnoucementService = async (
  id: string
): Promise<Announcement> => {
  return await prisma.announcement.delete({
    where: {
      id,
    },
  });
};
