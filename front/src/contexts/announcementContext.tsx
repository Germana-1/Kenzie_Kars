import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";
import * as Interface from "../interfaces";

export const AnnouncementContext =
  createContext<Interface.IAnnouncementContext>(
    {} as Interface.IAnnouncementContext
  );

export const AnnouncementProvider = ({
  children,
}: Interface.IAnnouncementContextProps) => {
  const [announcements, setAnnouncements] = useState();
  const [announcementDetail, setAnnouncementDetail] = useState();

  useEffect(() => {
    announcementListAll();
  }, []);

  async function announcementRegister(
    data: Interface.IRegisterAnnouncementRequest
  ) {
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
