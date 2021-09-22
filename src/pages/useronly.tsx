import { fetcher } from "@app/fetcher";
import { JWT, JWTPayload } from "@app/jwt";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";
import Pusher from "pusher-js";
import { useEffect } from "react";

type LandingProps = {
  user: JWTPayload | null;
  token: string;
};

export default function UserOnly(props: LandingProps) {
  const router = useRouter();

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_KEY as string, {
      cluster: "eu",
    });

    const channel = pusher.subscribe("chat");

    channel.bind("chat-event", function (data: any) {
      console.log(data);
    });

    return () => {
      pusher.unsubscribe("chat");
    };
  }, []);

  return (
    <div>
      <h1>Socket: </h1>
      <button
        onClick={() =>
          fetcher("POST", "/pusher", { test: "hello", token: props.token })
        }
      >
        Click
      </button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = JWT.parseRequest(ctx.req);

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { user, token: ctx.req.cookies.token } };
};
