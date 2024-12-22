import { z } from "zod";

export const teacherSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be more than 3 characters" }),
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z
    .string()
    .min(6, { message: "Password should be a minimum of 6 characters" }),
  firstname: z
    .string()
    .min(3, { message: "First Name must be more than 3 characters" }),
  lastname: z.string().optional(),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters" }),
  birthday: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Birthday must be in the format YYYY-MM-DD",
    }),
    sex:z.enum(["male","female"],{message:"Sex is required"}),
    img:z.instanceof(File,{message:"Image is required"})
});
