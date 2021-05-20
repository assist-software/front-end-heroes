import style from "./Landing.module.css";

export const Landing = () => {
  return (
    <section className={style.landing}>
      <div className={style.landingContainer}>
        <img
          className={style.landingImage}
          src="/heros.png"
          alt="front end heroes"
        />

        <div className={style.landingCard}>
          <h1 className={style.landingTitle}>
            Suntem multi si lucram cu browser-ul
          </h1>
        </div>
      </div>
    </section>
  );
};
