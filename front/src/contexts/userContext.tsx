import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import {
  IUser,
  IUserContext,
  IUserContextProps,
  IUserLogin,
  IUserRegister,
  IUserUpdate,
} from "../interfaces/user.interface";
import { api } from "../services/api";
import { IAddressUpdate } from "../interfaces/address.interface";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>();
  const [sessionError, setSessioError] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
  const [isSucessModalOpen, setIsSucessModalOpen] = useState(false);

  const handleClick = (typeModal: string) => {
    if (typeModal === "profile") {
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
    const token = localStorage.getItem("@kenzieToken") || "invalid";

    try {
      jwt_decode(token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      userAuth();
    } catch (error) {
      console.error(error);
    }
  }, []);

  async function userAuth() {
    try {
      const res = await api.get("/users/profile");

      localStorage.setItem("@kenzieId", res.data.id);

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function userSession(data: IUserLogin) {
    try {
      const res = await api.post("/login", data);

      localStorage.setItem("@kenzieToken", res.data.token);
      api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;

      await userAuth();

      navigate("/");
      setSessioError(false);
    } catch (error) {
      console.error(error);
      setSessioError(true);
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
        // Abrir modal de error
      } else {
        console.log(error.message);
      }
    }
  }

  async function userEditProfile(data: IUserUpdate) {
    const token = localStorage.getItem("@kenzieToken")
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/users/profile/`, data);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      document.location.reload()
    }
  }
  async function userEditAddress(data: IAddressUpdate) {
    const token = localStorage.getItem("@kenzieToken")
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/users/profile/address`, data);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      document.location.reload()
    }
  }

  const logout = () => {
    window.localStorage.clear();
    setUser(undefined);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userEditProfile,
        userEditAddress,
        sessionError,
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
