import { JWT, JWTPayload } from "@app/jwt";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react"

type LandingProps = {
    user: JWTPayload | null;
};

export default function Landing(props: LandingProps) {
    const router = useRouter();
    return (
        <div>
            <h1>cardr</h1>
            <h2>A simple card game</h2>
            {props.user ?
            <div>
                <button>Find game</button>
                <input placeholder="Join code" />
            </div>
            :
            <div>
                <button onClick={() => router.push("/login")}>Login</button>
                <button onClick={() => router.push("/register")}>Register</button>
            </div>}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const user = JWT.parseRequest(ctx.req);
    return { props: { user } };
};