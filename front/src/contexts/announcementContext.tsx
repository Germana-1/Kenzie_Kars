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
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedFuel, setSelectedFuel] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [fuel, setFuel] = useState<string[]>([]);

  useEffect(() => {
    async function getProductList() {
      setAnnouncements(await announcementListAll());
    }
    getProductList();
  }, []);

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

  useEffect(() => {
    const fetchData = async () => {
      let url = "/announcements";

      if (selectedBrand !== "") {
        url += `${url.includes("?") ? "&" : "?"}brand=${selectedBrand}`;
      }

      if (selectedModel !== "") {
        url += `${url.includes("?") ? "&" : "?"}model=${selectedModel}`;
      }

      if (selectedYear !== 0) {
        url += `${url.includes("?") ? "&" : "?"}year=${selectedYear}`;
      }

      if (selectedColor !== "") {
        url += `${url.includes("?") ? "&" : "?"}color=${selectedColor}`;
      }

      if (selectedFuel !== "") {
        url += `${url.includes("?") ? "&" : "?"}fuelType=${selectedFuel}`;
      }

      try {
        const response = await api.get(url);
        const data = response.data;

        setAnnouncements(data);
        setBrands([]);
        setModels([]);
        setColors([]);
        setYears([]);
        setFuel([]);
        data.map((el: IAnnouncement) => {
          setBrands((prev) => [...prev, el.brand]);
          setModels((prev) => [...prev, el.model]);
          setColors((prev) => [...prev, el.color]);
          setYears((prev) => [...prev, el.year]);
          setFuel((prev) => [...prev, el.fuelType]);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedBrand, selectedModel, selectedColor, selectedYear, selectedFuel]);

  return (
    <AnnouncementContext.Provider
      value={{
        announcementRegister,
        announcements,
        announcementListOne,
        setSelectedBrand,
        setSelectedModel,
        setSelectedColor,
        setSelectedYear,
        setSelectedFuel,
        brands,
        models,
        colors,
        years,
        fuel,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
