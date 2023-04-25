import { createContext } from "react";

import { IFipeContext, IFipeContextProps } from "../interfaces/fipe.interface";
import { fipe } from "../services/api";

export const FipeContext = createContext<IFipeContext>({} as IFipeContext);

export const FipeProvider = ({ children }: IFipeContextProps) => {
  async function getModelList() {
    const res = await fipe.get("/cars");
    return res.data;
  }

  return (
    <FipeContext.Provider value={{ getModelList }}>
      {children}
    </FipeContext.Provider>
  );
};
