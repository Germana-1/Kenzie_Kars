import { createContext } from "react";

import {
  IAnnouncement,
  IAnnouncementContext,
  IAnnouncementContextProps,
  IAnnouncementRegister,
} from "../interfaces/announcement.interface";
import { api } from "../services/api";

export const AnnouncementContext = createContext<IAnnouncementContext>(
  {} as IAnnouncementContext
);

export const AnnouncementProvider = ({
  children,
}: IAnnouncementContextProps) => {
  async function announcementRegister(
    data: IAnnouncementRegister
  ): Promise<void> {
    try {
      await api.post("/announcements", data);
    } catch (error) {
      console.log(error);
    }
  }

  async function announcementListAll(): Promise<IAnnouncement[]> {
    const res = await api.get("/announcements");

    return res.data;
  }

  async function announcementListOne(
    data: string
  ): Promise<IAnnouncement | undefined> {
    try {
      const res = await api.get(`/announcements/${data}`);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AnnouncementContext.Provider
      value={{
        announcementRegister,
        announcementListAll,
        announcementListOne,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
