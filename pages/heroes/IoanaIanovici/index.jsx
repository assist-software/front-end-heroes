import React from "react";
import Head from "next/head";
import style from "./IoanaIanovici.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Front-End Hero</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*
       * Doar niste idei, ca sa ne cunoastem mai bine.
       * Ce-ti place sa faci in timpul liber?
       * Ai vreun hobby? Poti sa ne spui mai multe despre el?
       * Culoarea preferata?
       * Filmul preferat?
       * Cartea preferata?
       * Fructul preferata?
       * Mancarea preferata?
       */}

      <main className={style.main}>
        <p>Ioana Ianovici</p>
        <p>
          <strong>Work in progress ...</strong>
        </p>

        <img
          className={style.image}
          src="https://media.giphy.com/media/13d2jHlSlxklVe/giphy.gif"
          width="500"
          height="350"
          alt="Nothing to see here"
        />
      </main>
    </>
  );
}
