import { fetcher } from "@app/fetcher";
import { LogoutIcon } from "@heroicons/react/outline";
import gameStyles from "@styles/game.module.css";
import { NextRouter } from "next/router";
import toast from "react-hot-toast";
import styles from "@styles/styles.module.css";

interface Props {
    router: NextRouter;
    code: string;
}

// While waiting for a teammate
export function WaitPage(props: Props) {
    return (
        <div className={styles.bg}>
            <h1 className={styles.heading} style={{ fontSize: "3em" }}>
                waiting for a teammate...
            </h1>
            <h2 className={styles.subheading} style={{ fontSize: "1.5em" }}>
                tip: remember to press &#34;take from deck&#34;
            </h2>
            <button
                className={styles.iconButton}
                style={{ width: "10em", marginTop: "1em" }}
                onClick={() => {
                    props.router.push("/");
                    fetcher("DELETE", `/game/${props.code}`).catch((err) =>
                        toast.error(err)
                    );
                }}
            >
                <LogoutIcon width={25} height={25} color="white" />
                exit
            </button>
            <h2 className={gameStyles.code}>code: {props.code}</h2>
        </div>
    );
}
