import { IAddress } from "./address.interface";
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

export interface IUserContext {
  user: IUser | undefined;
  isProfileModalOpen: boolean;
  isAddressModalOpen: boolean;
  sessionError: boolean;
  userSession: (data: IUserLogin) => void;
  userRegister: (data: IUserRegister) => void;
  logout: () => void;
  handleClick: (type: string) => void;
  setIsProfileModalOpen: (value: boolean) => void;
  setIsAddressModalOpen: (value: boolean) => void;
}

export interface IUserContextProps {
  children: React.ReactNode;
}
