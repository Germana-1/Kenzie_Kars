import * as yup from "yup";
import {
  ICreateUserRequest,
  ICreateUserResponse,
  IGetUserResponse,
} from "../interfaces";

export const createUserRequestSchema: yup.SchemaOf<ICreateUserRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    cpf: yup.string().required(),
    phone: yup.string().required(),
    birthdate: yup.date().required(),
    description: yup.string().notRequired(),
    password: yup.string().required(),
    accountType: yup.string().required(),
    avatar: yup.string().notRequired().nullable(true),
    address: yup
      .object()
      .shape({
        street: yup.string().required(),
        number: yup.string().required(),
        complement: yup.string().notRequired(),
        city: yup.string().required(),
        state: yup.string().required(),
        zipCode: yup.string().required(),
      })
      .required(),
  });

export const createUserResponseSchema: yup.SchemaOf<ICreateUserResponse> = yup
  .object()
  .shape({
    address: yup
      .object()
      .shape({
        zipCode: yup.string(),
        state: yup.string(),
        city: yup.string(),
        complement: yup.string().notRequired().nullable(),
        number: yup.string(),
        street: yup.string(),
        id: yup.string(),
      })
      .required(),
    avatar: yup.string().notRequired().nullable(),
    accountType: yup.string(),
    description: yup.string().notRequired().nullable(),
    birthdate: yup.date(),
    phone: yup.string(),
    cpf: yup.string(),
    email: yup.string().email(),
    name: yup.string(),
    id: yup.string(),
  });

export const getUserResponseSchema: yup.SchemaOf<IGetUserResponse> = yup
  .object()
  .shape({
    announcements: yup
      .array()
      .of(
        yup.object().shape({
          id: yup.string(),
          brand: yup.string(),
          model: yup.string(),
          year: yup.number(),
          mileage: yup.number(),
          price: yup.number(),
          priceFipe: yup.number(),
          fuelType: yup.string(),
          color: yup.string(),
          banner: yup.string(),
          description: yup.string(),
          isActive: yup.boolean(),
          isGoodBuy: yup.boolean(),
          createdAt: yup.date(),
          updatedAt: yup.date(),
          userId: yup.string(),
        })
      )
      .notRequired(),

    comments: yup.array().of(
      yup.object().shape({
        id: yup.string(),
        comment: yup.string(),
        createdAt: yup.date(),
        updatedAt: yup.date(),
        announcementId: yup.string(),
        userId: yup.string(),
      })
    ),
    address: yup
      .object()
      .shape({
        zipCode: yup.string(),
        state: yup.string(),
        city: yup.string(),
        complement: yup.string().notRequired().nullable(),
        number: yup.string(),
        street: yup.string(),
        id: yup.string(),
      })
      .required(),
    avatar: yup.string().notRequired().nullable(),
    accountType: yup.string(),
    description: yup.string().notRequired().nullable(),
    birthdate: yup.date(),
    phone: yup.string(),
    cpf: yup.string(),
    email: yup.string().email(),
    name: yup.string(),
    id: yup.string(),
  });
