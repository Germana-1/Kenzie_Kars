import * as yup from "yup";
import { IUserLogin } from "../interfaces";

export const loginRequestSchema: yup.SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
