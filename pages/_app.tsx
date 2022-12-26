import type { AppProps } from "next/app";
import { Fira_Code } from "@next/font/google";

import "../styles/globals.css";
import Head from "next/head";

const firaCode = Fira_Code({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${firaCode.style.fontFamily};
          }
        `}
      </style>

      <Head>
        <title>Ramon</title>
        <meta name="description" content="Ramon Ribeiro Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
