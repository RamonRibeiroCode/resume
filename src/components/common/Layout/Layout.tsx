import Head from "next/head";
import { Fira_Code } from "@next/font/google";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

const firaCode = Fira_Code({
  subsets: ["latin"],
});

function Layout({ children }: LayoutProps) {
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

      <Header />

      <main>{children}</main>

      <footer>Footer</footer>
    </>
  );
}

export default Layout;
