import { SetStateAction } from "react";
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
  description?: string | null;
  password: string;
  confirmPassword: string;
  avatar?: string | null;
  address: IAddress;
}

export interface IAddress {
  id?: string;
  street: string;
  number: string;
  complement?: string | null;
  city: string;
  state: string;
  zipCode: string;
}

export interface IUserContext {
  user: IUser | void;
  userSession: (data: IUserLogin) => void;
  userRegister: (data: IUserRegister) => void;
  logout: () => void;
  handleOpenModal: React.MouseEventHandler<HTMLButtonElement>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
}

export interface IUserContextProps {
  children: React.ReactNode;
}
