import { User } from "@prisma/client";

export function santiseUser(user: User) {
  const { password, ...rest } = user;
  return rest;
}

export function santiseMany(users: User[]) {
  return users.map((u) => santiseUser(u));
}
