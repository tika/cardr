import { User } from "@prisma/client";
import { serialize, parse } from "cookie";
import * as jwt from "jsonwebtoken";
import dayjs from "dayjs";
import { IncomingMessage } from "http";
import { NextApiRequest } from "next";

export type JWTPayload = Pick<User, "id" | "name">;

export class JWT {
    public static readonly SECRET_KEY = "game";
    public readonly user;

    constructor(user: Omit<User, "password">) {
        this.user = user;
    }

    public sign(): string {
        const payload: JWTPayload = {
            id: this.user.id,
            name: this.user.name,
        };

        return jwt.sign(payload, JWT.SECRET_KEY, {
            expiresIn: "24h",
        });
    }

    public static logoutCookie() {
        return JWT.cookie("", new Date());
    }

    public static cookie(token: string, expiry?: Date): string {
        return serialize("token", token, {
            httpOnly: true,
            expires: expiry || dayjs().add(24, "hours").toDate(),
            secure: true,
            path: "/",
        });
    }

    public static parseRequest(
        request: IncomingMessage & {
            cookies: Partial<{ [key: string]: string }>;
        }
    ) {
        if (!request.headers.cookie) {
            return null;
        }

        const { token = null } = parse(request.headers.cookie);

        if (!token) {
            return null;
        }

        return JWT.verify(token);
    }

    public static verify(token?: string): JWTPayload | null {
        if (!token) return null;

        try {
            const { iat, exp, ...payload } = jwt.verify(
                token,
                JWT.SECRET_KEY
            ) as unknown as JWTPayload & {
                iat: string;
                exp: number;
            };

            return payload;
        } catch (_) {
            return null;
        }
    }
}
