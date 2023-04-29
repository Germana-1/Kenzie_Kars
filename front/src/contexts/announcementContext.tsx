import { createContext, useEffect, useState } from "react";

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
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [announcement, setAnnouncement] = useState<IAnnouncement>();

  useEffect(() => {
    announcementListAll();
  }, []);

  async function announcementRegister(data: IAnnouncementRegister) {
    try {
      await api.post("/announcements", data);

      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  }

  async function announcementListAll() {
    const res = await api.get("/announcements");

    setAnnouncements(res.data);
  }

  async function announcementListOne(data: string) {
    try {
      const res = await api.get(`/announcements/${data}`);

      setAnnouncement(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AnnouncementContext.Provider
      value={{
        announcements,
        announcement,
        announcementRegister,
        announcementListAll,
        announcementListOne,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
