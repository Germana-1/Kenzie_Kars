import * as yup from "yup";

import { IAnnouncementRegister } from "../interfaces/announcement.interface";
import { imageSchema } from "./image.schema";

export const registerAnnouncementSchema: yup.ObjectSchema<IAnnouncementRegister> =
  yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.number().required(),
    mileage: yup.number().required(),
    price: yup.number().required(),
    priceFipe: yup.number().required(),
    fuelType: yup.string().required(),
    color: yup.string().required(),
    banner: yup.string().url().required(),
    description: yup.string().required(),
    image1: yup.string().notRequired(),
    image2: yup.string().notRequired(),
    image3: yup.string().notRequired(),
    image4: yup.string().notRequired(),
    image5: yup.string().notRequired(),
    image6: yup.string().notRequired(),
  });
