import type { AppProps } from "next/app"
import Head from "next/head"
import { Fira_Code } from "@next/font/google"

import Layout from "../components/common/Layout"
import "../styles/globals.css"

const firaCode = Fira_Code({
  subsets: ["latin"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          *,
          code,
          kbd,
          samp,
          pre {
            font-family: ${firaCode.style.fontFamily};
          }
        `}
      </style>

      <Head>
        <title>Ramon Ribeiro</title>
        <meta name="description" content="Ramon Ribeiro Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
