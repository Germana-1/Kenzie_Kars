export interface IRegisterAnnouncementRequest {
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
  images: IRegisterImageRequest[];
}

export interface IRegisterImageRequest {
  imgUrl: string;
}
