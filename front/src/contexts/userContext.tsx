import { createContext, useState, useEffect, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

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
  const [user, setUser] = useState<IUser | void>();
  const [userId, setUserId] = useState("");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
  const [isSucessModalOpen, setIsSucessModalOpen] = useState(false);

  const handleClick = (typeModal: string) => {
    if (typeModal === 'profile') {
      setIsProfileModalOpen(true);
    }
    if (typeModal === 'delete') {
      setIsDeleteAccountModalOpen(true);
      setIsProfileModalOpen(false);
    } else if (typeModal === 'address') {
      setIsAddressModalOpen(true);
    }
  };

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

      localStorage.setItem("@userId", payload.sub);


      navigate(`/profile/${payload.sub}/`);

      userAuth();

      return res.data;
    } catch (error: any) {
      if (error.response.status === 403) {
        toast.error(
          "Verifique se o e-mail e a senha estão corretos e tente novamente."
        );
      } else {
        console.log(error.message);
      }
    }
  }

  async function userRegister(data: IUserRegister) {
    try {
      const brDate = data.birthdate.split("/");
      const usDate = `${brDate[2]}-${brDate[1]}-${brDate[0]}`;
      data.birthdate = usDate;

      await api.post("/users", data);

      setIsSucessModalOpen(true)

    } catch (error: any) {
      if (error.response.status === 409) {
        toast.error(
          "Já existe um usuário com o mesmo CPF ou E-mail. Por favor, verifique suas informações e tente novamente."
        );
      } else {
        console.log(error.message);
      }
    }
  }

  const logout = () => {
    window.localStorage.clear();
    setUser();
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userSession,
        userRegister,
        logout,
        handleClick,
        isProfileModalOpen,
        setIsProfileModalOpen,
        isAddressModalOpen,
        setIsAddressModalOpen,
        isDeleteAccountModalOpen,
        setIsDeleteAccountModalOpen,
        isSucessModalOpen, 
        setIsSucessModalOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );  
};
