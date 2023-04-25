import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import {
  IUser,
  IUserContext,
  IUserContextProps,
  IUserLogin,
  IUserRegister,
} from "../interfaces/user.interface";
import { api } from "../services/api";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("@kenzieToken");

    if (token) {
      const payload = jwt_decode(token) as { sub: string };
      setUserId(payload.sub);
    }

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

  async function userSession(data: IUserLogin) {
    try {
      const res = await api.post("/login", data);

      localStorage.setItem("@kenzieToken", res.data.token);

      const payload = jwt_decode(res.data.token) as { sub: string };
      setUserId(payload.sub);

      navigate(`/profile/${userId}`);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function userRegister(data: IUserRegister) {
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
