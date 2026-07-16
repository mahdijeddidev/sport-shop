import { z } from "zod";

export const registerSchema = z.object({
  email: z.email("Invalid email address"),

  password: z.string().min(8, "Password must be at least 8 characters"),

  firstName: z.string().trim().min(2, "First name is too short").optional(),

  lastName: z.string().trim().min(2, "Last name is too short").optional(),
});

export type RegisterUserInput = z.infer<typeof registerSchema>;
