import * as Interface from "../interfaces";

export interface IUser {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  password: string;
  accountType: string;
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface IUserContext {
  user: IUser | undefined;
  userSession: (data: Interface.ILoginUserRequest) => void;
  userRegister: (data: Interface.IRegisterUserRequest) => void;
}

export interface IUserContextProps {
  children: React.ReactNode;
}
