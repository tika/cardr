import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </div>
  );
} 

export default MyApp;
