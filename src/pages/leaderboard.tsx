import { useRouter } from "next/dist/client/router";
import { fetcher } from "@app/fetcher";
import styles from "./styles.module.css";
import generalStyles from "./styles.module.css";
import { Player } from "@app/santise";
import useSWR from "swr";
import { LogOut } from "iconic-react";

export default function Leaderboard() {
  const router = useRouter();
  const { data, error } = useSWR<{ leaderboard: Player[] }, any>(
    "/leaderboard",
    (url) => fetcher("GET", url)
  );

  return (
    <div className={styles.bg}>
      {!data ? (
        <h1>loading...</h1>
      ) : (
        <>
          <h1 className={styles.heading}>leaderboard</h1>
          <div className={styles.leaderboard} style={{ marginTop: "1em" }}>
            {data.leaderboard.map((p, i) => (
              <div className={styles.leaderboardModule}>
                <div className={styles.leaderboardPos}>
                  <h1>#{i + 1}</h1>
                </div>
                <div className={styles.leaderboardInfo}>
                  <h1>{p.name}</h1>
                  <h2>
                    {p.timesWon} wins • {p.timesPlayed} games played
                  </h2>
                </div>
              </div>
            ))}

            <button
              className={generalStyles.iconButton}
              style={{
                width: "10em",
              }}
              onClick={() => {
                router.push("/");
              }}
            >
              <LogOut size={25} color="white" />
              go home
            </button>
          </div>
        </>
      )}
    </div>
  );
}
