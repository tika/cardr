import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "./generalstyles.css";
import "@fontsource/poppins";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </div>
  );
} 

export default MyApp;
