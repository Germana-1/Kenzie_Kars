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

export interface IAnnouncementContext {
  announcementRegister: (data: IAnnouncementRegister) => void;
  announcementListAll: () => Promise<IAnnouncement[]>;
  announcementListOne: (data: string) => Promise<IAnnouncement | undefined>;
}

export interface IAnnouncementContextProps {
  children: React.ReactNode;
}
