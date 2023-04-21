import { IRegisterAnnouncementRequest } from "./announcement.interface";

export interface image {
  imgUrl: string;
}

export interface IAnnouncement {
  brand: string;
  model: string;
  year: number;
  mileage: number;
  color: string;
  price: number;
  priceFipe: number;
  fuelType: string;
  description: string;
  banner: string;
  images: image[];
}

export interface IAnnouncementContext {
  announcementDetail: any;
  announcements: any;
  announcementRegister: (data: IRegisterAnnouncementRequest) => void;
  announcementListAll: () => void;
  announcementListOne: (data: string) => void;
}

export interface IAnnouncementContextProps {
  children: React.ReactNode;
}
