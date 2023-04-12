import { responseBodyUser } from "./responseBodyUser";

export const getAllAnnoucementsOptions = {
    id: true,
    banner: true,
    brand: true,
    color: true,
    comments: true,
    createdAt: true,
    description: true,
    fuelType: true,
    images: true,
    isActive: true,
    isGoodBuy: true,
    mileage: true,
    model: true,
    price: true,
    priceFipe: true,
    updatedAt: true,
    year: true,
    user: {
        select: responseBodyUser,
    },
};
