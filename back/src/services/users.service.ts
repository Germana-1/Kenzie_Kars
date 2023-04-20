import { prisma } from "../database";
import bcrypt from "bcryptjs";
import { ICreateUserRequest, ICreateUserResponse } from "../interfaces";
import { getUserResponseSchema, createUserResponseSchema } from "../schemas";
import { AppError } from "../errors";

export const createUserService = async (
  body: ICreateUserRequest
): Promise<ICreateUserResponse> => {
  const { address, password, ...newBody } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      ...newBody,
      password: hashedPassword,
      birthdate: new Date(body.birthdate),
    },
  });

  const newAddress = await prisma.address.create({
    data: {
      ...address,
      userId: newUser.id,
    },
  });

  const user = { ...newUser, address: { ...newAddress } };

  const userValidated = await createUserResponseSchema.validate(user, {
    stripUnknown: true,
    abortEarly: false,
  });

  return userValidated;
};

export const getOneUserService = async (id: string): Promise<any> => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      address: true,
      comments: true,
      announcements: true,
    },
  });

  if (!user) {
    throw new AppError("User Not Exist");
  }
  const userValidated = await getUserResponseSchema.validate(user, {
    stripUnknown: true,
    abortEarly: false,
  });

  return userValidated;
};
