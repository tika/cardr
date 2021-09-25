import { User } from "@prisma/client";

export interface Player {
  id: string
  name: string
  timesWon: number
  timesPlayed: number
}

export function santiseUser(user: User): Player {
  const { password, ...rest } = user;
  return rest;
}

export function santiseMany(users: User[]): Player[] {
  return users.map((u) => santiseUser(u));
}
