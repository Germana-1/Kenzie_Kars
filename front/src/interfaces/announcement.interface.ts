import { IComment } from "./comment.interface";
import { IImage } from "./image.interface";
import { IUser } from "./user.interface";

export interface IAnnouncement {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  images?: IImage[];
  comments?: IComment[];
  user?: IUser;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  priceFipe: number;
  fuelType: string;
  color: string;
  banner: string;
  description: string;
  isActive: boolean;
  isGoodBuy: boolean;
}

export interface IAnnouncementRegister {
  brand: string;
  banner: string;
  color: string;
  description: string;
  fuelType: string;
  mileage: number;
  model: string;
  price: number;
  priceFipe: number;
  year: number;
  images: IImage[] | any;
  [key: string]: any;
}

export interface IAnnouncementFormRegister {
  brand: string;
  banner: string;
  color: string;
  description: string;
  fuelType: string;
  mileage: number;
  model: string;
  price: number;
  priceFipe: number;
  year: number;
  images: IImage[] | any;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
}

export interface IAnnouncementContext {
  announcementRegister: (data: IAnnouncementRegister) => void;
  announcements: IAnnouncement[];
  announcementListOne: (data: string) => Promise<IAnnouncement | undefined>;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string>>;
  setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
  setSelectedFuel: React.Dispatch<React.SetStateAction<string>>;
  brands: string[];
  models: string[];
  colors: string[];
  years: number[];
  fuel: string[];
}

export interface IAnnouncementContextProps {
  children: React.ReactNode;
}
