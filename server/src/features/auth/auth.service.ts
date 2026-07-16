import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma.js";
import { AppError } from "../../shared/errors/AppError.js";

type RegisterUserInput = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export async function registerUser({
  email,
  password,
  firstName,
  lastName,
}: RegisterUserInput) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new AppError(409, "Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,
    },
    // return these only
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });
  return user;
  // return {
  //   id: user.id,
  //   email: user.email,
  //   firstName: user.firstName,
  //   lastName: user.lastName,
  // };
}
