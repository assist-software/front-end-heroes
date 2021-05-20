import { useState, useEffect } from "react";

import style from "./Thumbnail.module.css";
import { generateRandomStyles } from "../../utils/generateRandomStyles";
import { getRandomNumber } from "../../utils/getRandomNumber";

export const Thumbnail = ({ name, type = "" }) => {
  const [styles, setStyles] = useState(generateRandomStyles());

  useEffect(() => {
    setInterval(() => {
      const { backgroundColor } = generateRandomStyles();
      setStyles({ ...styles, backgroundColor });
    }, getRandomNumber({ min: 3000, max: 5000 }));
  }, []);

  return (
    <div className={style.thumbnail} style={{ ...styles }}>
      <div
        className={style.thumbnailHero}
        style={{ backgroundImage: `url(/${type}-hero.png)` }}
      ></div>
      <h2 className={style.thumbnailName}>{name}</h2>
    </div>
  );
};
