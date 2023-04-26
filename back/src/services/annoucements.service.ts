import { Announcement } from "@prisma/client";
import { Request } from "express";

import { prisma } from "../database";
import * as Interfaces from "../interfaces";
import * as Utils from "../utils";

export const getAllAnnouncementsService = async () => {
  return await prisma.announcement.findMany({
    select: Utils.getAllAnnoucementsOptions,
  });
};

interface IDataCreateAnnouncementRequest {
  id: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  priceFipe: number;
  fuelType: string;
  color: string;
  banner: string;
  description: string;
  isActive: boolean;
  isGoodBuy: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  images?: any; // !Tipagem Indefinida!
}

export const createAnnouncementService = async (req: Request) => {
  const { images, ...newBody } = req.body;
  const newAnnouncement = await prisma.announcement.create({
    data: { ...newBody, userId: req.authUser.id },
    include: {
      images: true,
      comments: true,
      user: {
        select: Utils.responseBodyUser,
      },
    },
  });

  const imageList = await Promise.all(
    images.map(async (imageUrl: string) => {
      return await prisma.image.create({
        data: {
          imgUrl: imageUrl,
          announcementId: newAnnouncement.id,
        },
      });
    })
  );

  return { ...newAnnouncement, images: imageList };
};

export const getOneAnnouncementService = async (
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

export const updateAnnouncementService = async (
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

export const deleteAnnouncementService = async (
  id: string
): Promise<Announcement> => {
  return await prisma.announcement.delete({
    where: {
      id,
    },
  });
};
