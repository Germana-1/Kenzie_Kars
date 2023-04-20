import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Interface from "../interfaces";
import * as Api from "../services";

export const UserContext = createContext<Interface.IUserContext>(
  {} as Interface.IUserContext
);

export const UserProvider = ({ children }: Interface.IUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Interface.IUser>();

  useEffect(() => {
    console.log(localStorage.getItem("@token"));
  }, []);

  const session = async (data: Interface.ILoginUserRequest): Promise<void> => {
    const res = await Api.userSession(data);

    if (res) {
      localStorage.setItem("@kenzieToken", res.data.token);

      setUser(res);
      navigate("/profile");
    }
  };

  return (
    <UserContext.Provider value={{ user, session }}>
      {children}
    </UserContext.Provider>
  );
};
