import { z } from "zod";

export const Signupvalidation = z.object({
    name: z.string().min(2,{message:'Too short'}).max(50),
    username: z.string().min(2).max(50),
    email: z.string().min(2,{message:'Too short'}).max(50),
    password: z.string().min(8,{message:'keep strong password'}).max(50),
  });