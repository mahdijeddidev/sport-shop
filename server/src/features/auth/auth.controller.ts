import { Request, Response } from "express";
import { registerUser } from "./auth.service.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";
import { registerSchema } from "./auth.validation.js";

export const register = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const user = await registerUser({ email, password, firstName, lastName });

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
});
