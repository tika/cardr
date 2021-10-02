import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import { fetcher } from "@app/fetcher";
import { JWT } from "@app/jwt";
import { useState } from "react";
import { registerSchema } from "@schemas/users";
import toast from "react-hot-toast";
import styles from "./styles.module.css";;

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function register() {
    const body = registerSchema.safeParse({ name: username, password });
    
    if ("error" in body) {
      return toast.error(body.error.name);
    } else {
      if (password !== confirmPassword) return toast.error("Passwords don't match");
      fetcher("PUT", "/users", { name: username, password }).then(() =>
        router.push("/")
      );
    }    
  }

  return (
    <div className={styles.bg}>
      <h1 className={styles.heading}>Register</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          register();
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className={styles.login} style={{ width: "8em" }}>Register</button>
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
