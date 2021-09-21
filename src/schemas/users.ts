import * as z from "zod";

const name = z.string().min(3);
const password = z.string().min(6);

export const registerSchema = z.object({
  name,
  password,
});

export const loginSchema = z.object({
  name: name.optional(),
  password,
});

export const updateSchema = z.object({
  name: name.optional(),
  newPassword: password.optional(),
  password,
});

export const deleteSchema = z.object({
  password,
});
