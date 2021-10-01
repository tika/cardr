import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import "./generalstyles.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </div>
  );
} 

export default MyApp;
