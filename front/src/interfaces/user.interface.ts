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
  sessionError: boolean;
  userSession: (data: IUserLogin) => void;
  userRegister: (data: IUserRegister) => void;
  userListOne: (userId: string | undefined) => Promise<IUser>;
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
  userResetPassword: (data: IResetPassword, resetToken: string) => void;
  emailSend: (data: IEmailSubmission) => void;
}

export interface IUserContextProps {
  children: React.ReactNode;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
}

export interface IEmailSubmission {
  email: string;
}
