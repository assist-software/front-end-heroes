import React from "react";
import Head from "next/head";

import { Heroes } from "@components/Heroes/Heroes";
import { Love } from "@components/Love/Love";
import { Landing } from "@components/Landing/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Landing />
        <Love />
        <Heroes />
      </main>

      <footer></footer>
    </>
  );
}
