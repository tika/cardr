import { useRouter } from "next/dist/client/router";
import { fetcher } from "@app/fetcher";
import styles from "@styles/styles.module.css";
import { Player } from "@app/santise";
import useSWR from "swr";
import { LogoutIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { Title } from "@components/Title";

export default function Leaderboard() {
    const router = useRouter();
    const { data, error } = useSWR<{ leaderboard: Player[] }, any>(
        "/leaderboard",
        (url) => fetcher("GET", url)
    );

    if (error) return null;

    return (
        <div className={styles.bg}>
            <Title text="leaderboard" />
            {!data ? (
                <h1>loading...</h1>
            ) : (
                <>
                    <h1 className={styles.heading}>leaderboard</h1>
                    <div
                        className={styles.leaderboard}
                        style={{ marginTop: "1em" }}
                    >
                        {data.leaderboard.map((p, i) => (
                            <div key={i} className={styles.leaderboardModule}>
                                <div className={styles.leaderboardPos}>
                                    <h1>#{i + 1}</h1>
                                </div>
                                <div className={styles.leaderboardInfo}>
                                    <h1>{p.name}</h1>
                                    <h2>
                                        {p.timesWon} wins • {p.timesPlayed}{" "}
                                        games played
                                    </h2>
                                </div>
                            </div>
                        ))}

                        <button
                            className={styles.iconButton}
                            style={{
                                width: "10em",
                                marginTop: "1em",
                            }}
                            onClick={() => {
                                router.push("/");
                            }}
                        >
                            <LogoutIcon height={25} width={25} color="white" />
                            go home
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
