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
  const [editAdModalOpen, setEditAdModalOpen] = useState(false);
  const [deleteAdModalOpen, setDeleteAdModalOpen] = useState(false);
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
  const [minKm, setMinKm] = useState("");
  const [maxKm, setMaxKm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [hiddenButtonResetFilters, setHiddenButtonResetFilters] =
    useState(true);

  async function announcementRegister(data: IAnnouncementRegister) {
    try {
      await api.post("/announcements", data);
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

  const handleClick = (typeModal: string) => {
    if (typeModal === "editAd") {
      setEditAdModalOpen(true);
    }
    if (typeModal === "delete") {
      setDeleteAdModalOpen(true);
      setEditAdModalOpen(false);
    }
  };

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
        let data = response.data;
        let filteredData = response.data;

        const formatMinKm = parseInt(minKm.replace(/[^\d,-]/g, "")) + "";
        const formatMaxKm = parseInt(maxKm.replace(/[^\d,-]/g, "")) + "";
        const formatMinPrice = parseInt(minPrice.replace(/[^\d,-]/g, "")) + "";
        const formatMaxPrice = parseInt(maxPrice.replace(/[^\d,-]/g, "")) + "";

        if (minPrice != "" && maxPrice != "") {
          filteredData = filteredData.filter((el: IAnnouncement) => {
            return el.price >= Number(minPrice) && el.price <= Number(maxPrice);
          });
        } else if (minPrice != "" && maxPrice == "") {
          filteredData = filteredData.filter((el: IAnnouncement) => {
            return el.price >= Number(minPrice);
          });
        } else if (maxPrice != "" && minPrice == "") {
          filteredData = filteredData.filter((el: IAnnouncement) => {
            return el.price <= Number(maxPrice);
          });
        }

        if (minKm != "" && maxKm != "") {
          filteredData = filteredData.filter((el: IAnnouncement) => {
            return el.mileage >= Number(minKm) && el.mileage <= Number(maxKm);
          });
        } else if (minKm != "" && maxKm == "") {
          filteredData = filteredData.filter((el: IAnnouncement) => {
            return el.mileage >= Number(minKm);
          });
        } else if (maxKm != "" && minKm == "") {
          filteredData = filteredData.filter((el: IAnnouncement) => {
            return el.mileage <= Number(maxKm);
          });
        }
        if (
          selectedBrand ||
          selectedModel ||
          selectedYear ||
          selectedColor ||
          selectedFuel ||
          minKm ||
          maxKm ||
          minPrice ||
          maxPrice
        ) {
          setHiddenButtonResetFilters(false);
        }

        data = filteredData;

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
  }, [
    selectedBrand,
    selectedModel,
    selectedColor,
    selectedYear,
    selectedFuel,
    minKm,
    maxKm,
    minPrice,
    maxPrice,
  ]);

  return (
    <AnnouncementContext.Provider
      value={{
        editAdModalOpen,
        setEditAdModalOpen,
        deleteAdModalOpen,
        setDeleteAdModalOpen,
        handleClick,
        announcements,
        announcement,
        announcementRegister,
        announcementListOne,
        announcementListAll,
        setSelectedBrand,
        setSelectedModel,
        setSelectedColor,
        setSelectedYear,
        setSelectedFuel,
        setMinKm,
        setMaxKm,
        setMinPrice,
        setMaxPrice,
        minKm,
        maxKm,
        minPrice,
        maxPrice,
        brands,
        models,
        colors,
        years,
        fuel,
        setHiddenButtonResetFilters,
        hiddenButtonResetFilters,
      }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
