import { JWT, JWTPayload } from "@app/jwt";
import { GetServerSideProps } from "next";
import { useRouter } from "next/dist/client/router";

type LandingProps = {
  user: JWTPayload | null;
};

export default function UserOnly(props: LandingProps) {
  const router = useRouter();

  return (
    <div>
        <h1>Socket: </h1>
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
    
  return { props: { user } };
};
