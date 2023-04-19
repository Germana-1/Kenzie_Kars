import * as yup from "yup";

export const registerAnnouncementSchema = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().required(),
  mileage: yup.number().required(),
  price: yup.number().required(),
  priceFipe: yup.number().required(),
  fuelType: yup.string().required(),
  color: yup.string().required(),
  banner: yup.string().url().required(),
  description: yup.string().required(),
  images: yup.array().of(yup.string().url()),
});
