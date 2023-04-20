import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";
import * as Interface from "../interfaces";

export const UserContext = createContext<Interface.IUserContext>(
  {} as Interface.IUserContext
);

export const UserProvider = ({ children }: Interface.IUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Interface.IUser>();

  async function userSession(data: Interface.ILoginUserRequest) {
    try {
      const res = await api.post("/login", data);

      localStorage.setItem("@kenzieToken", res.data.token);

      navigate("/profile");

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function userRegister(data: Interface.IRegisterUserRequest) {
    try {
      console.log(data);

      await api.post("/users", data);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  async function userListOne() {
    
  }

  return (
    <UserContext.Provider value={{ user, userSession, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
