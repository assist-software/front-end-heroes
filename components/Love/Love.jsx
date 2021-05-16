import style from "./Love.module.css";

export const Love = () => {
  return (
    <section className={style.love}>
      <h2 className={style.loveTitle}>Ne place javascript</h2>
      <p className={style.loveSubtitle}>cel putin de la 9:00 la 18:00</p>

      <div className={style.loveImages}>
        <img src="/1.png" alt="front-end" />
        <img src="/2.png" alt="javascript" />
      </div>

      <p className={style.loveFun}>Afla ce alte lucruri avem in comun</p>

      <p className={style.loveDiscover} href="#heroes">
        Hai la o ☕ virtuala sau la bizz sa povestim despre chestii.
      </p>

      <p className={style.loveExtra}>🎥 ⛷️ 🌭 🎳 🍹 🏓 🏋️ 🍪 🚴 ⚽ 🌴 🎮 ♟️</p>
    </section>
  );
};
