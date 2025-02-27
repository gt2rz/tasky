import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({message: "Invalid email"}).min(1, {message: "Email is required"}),
  password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
});

export const registerSchema = z.object({
  email: z.string().email({message: "Invalid email"}).min(1, {message: "Email is required"}),
  password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
  firstname: z.string().min(1, {message: "Firstname is required"}),
  lastname: z.string().min(1, {message: "Lastname is required"}),
});

