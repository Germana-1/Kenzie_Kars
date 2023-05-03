import { IAddress, IAddressUpdate } from "./address.interface";
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
export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthdate?: string;
  description?: string;
  password?: string;
  accountType?: string;
  avatar?: string;
}

export interface IUserContext {
  user: IUser | undefined;
  sessionError: boolean;
  userSession: (data: IUserLogin) => void;
  userRegister: (data: IUserRegister) => void;
  userEditProfile: (data: IUserUpdate) => void;
  userEditAddress: (data: IAddressUpdate) => void;
  logout: () => void;
  handleClick: (type: string) => void;
  isProfileModalOpen: boolean;
  isAddressModalOpen: boolean;
  isSucessModalOpen: boolean;
  isDeleteAccountModalOpen: boolean;
  setIsProfileModalOpen: (value: boolean) => void;
  setIsAddressModalOpen: (value: boolean) => void;
  setIsDeleteAccountModalOpen: (value: boolean) => void;
  setIsSucessModalOpen: (value: boolean) => void;
}

export interface IUserContextProps {
  children: React.ReactNode;
}
