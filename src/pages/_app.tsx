/* eslint-disable react/no-unknown-property */
import type { AppProps } from "next/app"
import Head from "next/head"
import Script from "next/script"
import { Fira_Code } from "@next/font/google"
import { ApolloProvider } from "@apollo/client"

import Layout from "../components/common/Layout"
import { client } from "../lib/apollo"

import "../styles/globals.css"

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--fira-font",
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

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W9VNHHJ');
      `}
      </Script>

      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  )
}
