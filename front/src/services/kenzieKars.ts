import axios from "axios";

import * as Interface from "./../../../back/src/interfaces";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const userSession = async (data: Interface.IUserLogin) => {
  try {
    const res = await api.post("/login", data);
    console.log(res.data);

    return res.data.token;
  } catch (error) {
    console.log(error);
  }
};
