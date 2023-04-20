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
  session: (data: Interface.ILoginUserRequest) => void;
}

export interface IUserContextProps {
  children: React.ReactNode;
}
