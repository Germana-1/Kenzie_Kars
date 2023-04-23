import { IAddress } from "../../../back/src/interfaces";
import { IAnnouncement } from "./announcement.interface";
import { IComment } from "./comment.interface";

export interface IUser {
  id?: string;
  description?: string;
  avatar?: string;
  address?: IAddress;
  createdAt?: string;
  updatedAt?: string;
  announcements?: IAnnouncement[];
  comments?: IComment[];
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  password: string;
  accountType: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  house_number: string;
  complement: string;
  password: string;
  confirm_password: string;
}

export interface IUserContext {
  user: IUser | undefined;
  userSession: (data: IUserLogin) => void;
  userRegister: (data: IUserRegister) => void;
}

export interface IUserContextProps {
  children: React.ReactNode;
}
