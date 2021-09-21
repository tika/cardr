   
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import { fetcher } from "@app/fetcher";
import { JWT } from "@app/jwt";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    function register() {
        if (password !== confirmPassword) return alert("Not confirm");
        fetcher("POST", "/users", { name: username, password }).then(() => router.push("/"))
    }

    return (
      <div
        className={`min-h-screen mx-auto flex flex-col justify-center transition duration-200 items-center`}>
        <h1 className="font-black text-6xl dark:text-white mb-8">Login</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            register();}}>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" value={password} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button>Login</button>
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