import { fetcher } from "@app/fetcher";
import { JWT, JWTPayload } from "@app/jwt";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import toast from "react-hot-toast";

type LandingProps = {
  user: JWTPayload | null;
};

export default function Landing(props: LandingProps) {
  const [joinCode, setJoinCode] = useState("");
  
  const router = useRouter();

  return (
    <div>
      <h1>cardr</h1>
      <h2>A simple card game</h2>
      {props.user ? (
        <div>
          <button onClick={() => fetcher("GET", "/game/start").then((d: any) => router.push(`/${d.code}`))}>Find game</button>
          <input placeholder="Join code" value={joinCode} onChange={(e) => setJoinCode(e.target.value)} />
          <button onClick={() => {
            if (!joinCode) return;
            console.log(joinCode);
            fetcher("GET", `/game/${joinCode}`)
              .then((v: any) => {
                if (Object.keys(v).length === 0) {
                  setJoinCode("");
                  toast.error("Invalid game code");
                } else router.push(`/${joinCode}`);
            });
          }}>Join requested</button>
        </div>
      ) : (
        <div>
          <button onClick={() => router.push("/login")}>Login</button>
          <button onClick={() => router.push("/register")}>Register</button>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = JWT.parseRequest(ctx.req);
  return { props: { user } };
};
