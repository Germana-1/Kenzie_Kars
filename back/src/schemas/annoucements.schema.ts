import * as Interfaces from "../interfaces/annoucements";
import * as yup from "yup";

export const createAnnoucementSchema: yup.SchemaOf<Interfaces.ICreateAnnoucementRequest> =
  yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.number().required(),
    mileage: yup.number().required(),
    color: yup.string().required(),
    price: yup.number().required(),
    priceFipe: yup.number().required(),
    fuelType: yup.string().required(),
    description: yup.string().required(),
    banner: yup.string().required(),
  });

export const updateAnnoucementSchema: yup.SchemaOf<Interfaces.IUpdateAnnoucementRequest> =
  yup.object().shape({
    brand: yup.string(),
    model: yup.string(),
    year: yup.number(),
    mileage: yup.number(),
    color: yup.string(),
    price: yup.number(),
    priceFipe: yup.number(),
    fuelType: yup.string(),
    description: yup.string(),
    banner: yup.string(),
  });
