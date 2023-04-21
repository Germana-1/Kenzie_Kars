import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";
import * as Interface from "../interfaces";

export const UserContext = createContext<Interface.IUserContext>(
  {} as Interface.IUserContext
);

export const UserProvider = ({ children }: Interface.IUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Interface.IUser>();

  useEffect(() => {
    const token = localStorage.getItem("@kenzieToken");
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    userAuth();
  }, []);

  async function userAuth() {
    try {
      const res = await api.get("/users/profile");

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }

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
      await api.post("/users", data);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{ user, userSession, userRegister }}>
      {children}
    </UserContext.Provider>
  );
};
