import { Request, Response } from "express";
import { registerUser } from "./auth.service.js";

export async function register(req: Request, res: Response) {
  try {
    const { email, password, firstName, lastName } = req.body;

    const user = await registerUser({ email, password, firstName, lastName });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
