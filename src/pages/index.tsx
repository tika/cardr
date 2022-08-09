import { fetcher } from "@app/fetcher";
import { JWT, JWTPayload } from "@app/jwt";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "@styles/styles.module.css";
import { Title } from "@components/Title";

type LandingProps = {
    user: JWTPayload | null;
};

export default function Landing(props: LandingProps) {
    const [joinCode, setJoinCode] = useState("");

    const router = useRouter();

    return (
        <div className={styles.bg}>
            <Title text="cardr" />
            <h1 className={styles.heading}>cardr</h1>
            <h2 className={styles.subheading}>the least interactive game</h2>
            {props.user ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1em",
                        marginTop: "3em",
                        width: "20em",
                    }}
                >
                    <button
                        className={styles.login}
                        onClick={() =>
                            fetcher("GET", "/game/start").then((d: any) =>
                                router.push(`/${d.code}`)
                            )
                        }
                    >
                        create game
                    </button>
                    <button
                        className={styles.register}
                        onClick={() => router.push("/leaderboard")}
                    >
                        leaderboard
                    </button>
                    <div style={{ display: "flex", gap: "1em" }}>
                        <input
                            style={{ width: "calc(100% - 8em)" }}
                            className={styles.input}
                            placeholder="join code"
                            value={joinCode}
                            onChange={(e) => setJoinCode(e.target.value)}
                        />
                        <button
                            style={{ width: "8em" }}
                            className={styles.register}
                            onClick={() => {
                                if (!joinCode) return;
                                console.log(joinCode);
                                fetcher("GET", `/game/${joinCode}`).then(
                                    (v: any) => {
                                        if (Object.keys(v).length === 0) {
                                            setJoinCode("");
                                            toast.error("Invalid game code");
                                        } else if (
                                            v.players &&
                                            v.players.length >= 2
                                        ) {
                                            setJoinCode("");
                                            toast.error("Game full");
                                        } else router.push(`/${joinCode}`);
                                    }
                                );
                            }}
                        >
                            Join game
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.buttons}>
                    <button
                        className={styles.login}
                        onClick={() => router.push("/login")}
                    >
                        Login
                    </button>
                    <button
                        className={styles.register}
                        onClick={() => router.push("/register")}
                    >
                        Register
                    </button>
                </div>
            )}
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const user = JWT.parseRequest(ctx.req);
    return { props: { user } };
};
