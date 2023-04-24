import * as yup from "yup";
import { IUserSession } from "../interfaces";

export const loginRequestSchema: yup.SchemaOf<IUserSession> = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
