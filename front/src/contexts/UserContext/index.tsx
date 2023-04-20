import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Interface from "../../interfaces";
import { IUser, IUserContext } from "./interfaces";

interface IUserContextProps {
  children: React.ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    console.log(localStorage.getItem("@token"));
  }, []);

  const session = async (data: Interface.ILoginUserRequest): Promise<void> => {
  };
  
  const register = () => {};

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
