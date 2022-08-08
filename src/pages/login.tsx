import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import { fetcher } from "@app/fetcher";
import { JWT } from "@app/jwt";
import { useState } from "react";
import toast from "react-hot-toast";
import { loginSchema } from "@schemas/users";
import styles from "@styles/styles.module.css";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submit() {
        // validation
        const body = loginSchema.parse({ name: username, password });

        const promise = fetcher("POST", "/users", body).then(() =>
            router.push("/")
        );
        await toast
            .promise(promise, {
                success: "Success",
                loading: "Loading...",
                error: (e) => e.message || "Something went wrong...",
            })
            .catch(() => null);
    }

    return (
        <div className={styles.bg}>
            <h1 className={styles.heading}>Login</h1>
            <form
                className={styles.form}
                onSubmit={async (e) => {
                    e.preventDefault();
                    submit();
                }}
            >
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button style={{ width: "7em" }} className={styles.login}>
                    Login
                </button>
            </form>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const user = JWT.parseRequest(ctx.req);

    if (user) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return { props: {} };
};
