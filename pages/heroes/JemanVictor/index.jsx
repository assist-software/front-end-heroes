import React from "react";
import Head from "next/head";

import style from "./JemanVictor.module.css";

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
        <h1>Salut, Sunt Victor</h1>
        <p className={style.text}>M-am nascut in MD, in Republica MD</p>
        <p className={style.text}>
          Imi plac jocurile video. Practic Dota 2 casual. Am jucat un pic de
          StarCraft 2. Mai joc si la PS4 cate un pic, Mortal Kombat, UFC si tot
          felul de masinute.
        </p>

        <p className={style.text}>Am o pisica</p>
        <img className={style.image} src="/JemanVictor/5.jpg" alt="" />

        <p className={style.text}>Am si un caine</p>
        <img className={style.image} src="/JemanVictor/4.jpg" alt="" />

        <p className={style.text}>Imi place destul de mult craciunul</p>
        <img className={style.image} src="/JemanVictor/6.jpg" alt="" />

        <p className={style.text}>Fructul preferat: gutuie</p>

        <p className={style.text}>
          Floarea preferata: lalea. Nu aveam altceva in gradina cand eram mic
          asa ca mi-a ramas asta in minte.
        </p>

        <p className={style.text}>
          Pentru relaxare/deconectare mai desenez chestii simple uneori
        </p>
        <img className={style.image} src="/JemanVictor/1.jpg" alt="" />

        <p className={style.text}>
          Aici am terminat facultate. Eram bucuros ca am scapat.
        </p>
        <img className={style.image} src="/JemanVictor/3.jpg" alt="" />
      </main>
    </>
  );
}
