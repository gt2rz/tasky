import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z
  .string()
  .trim(),
  password: z
  .string()
  .trim(),
});

export const RegisterFormSchema = z.object({
  email: z
  .string()
  .email({message: "Invalid email"})
  .min(1, {message: "Email is required"})
  .trim(),
  password: z
  .string()
  .min(8, {message: "Password must be at least 6 characters long"})
  .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
  .regex(/[0-9]/, { message: 'Contain at least one number.' })
  .regex(/[^a-zA-Z0-9]/, {
    message: 'Contain at least one special character.',
  })
  .trim(),
  firstname: z
  .string()
  .min(1, {message: "Firstname is required"})
  .trim(),
  lastname: z
  .string()
  .min(1, {message: "Lastname is required"})
  .trim(),
});

export type RegisterFormState = 
| {
  errors?: {
    email?: string[]
    password?: string[]
    firstname?: string[]
    lastname?: string[]
  };
  message?: string;
} | undefined;

export type LoginFormState = 
| {
  errors?: {
    email?: string[]
    password?: string[]
  }
  message?: string;
} | undefined;