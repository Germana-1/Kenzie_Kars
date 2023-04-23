import { createContext, useEffect, useState } from "react";

import {
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
  const [announcements, setAnnouncements] = useState();
  const [announcementDetail, setAnnouncementDetail] = useState();

  useEffect(() => {
    announcementListAll();
  }, []);

  async function announcementRegister(data: IAnnouncementRegister) {
    try {
      await api.post("/announcements", data);
    } catch (error) {
      console.log(error);
    }
  }

  async function announcementListAll() {
    try {
      const res = await api.get("/announcements");

      setAnnouncements(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function announcementListOne(data: string) {
    try {
      const res = await api.get(`/announcements/${data}`);

      setAnnouncementDetail(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AnnouncementContext.Provider
      value={{
        announcements,
        announcementDetail,
        announcementRegister,
        announcementListAll,
        announcementListOne,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
