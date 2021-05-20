import { getRandomColor } from "./getRandomColor";
import { getRandomNumber } from "./getRandomNumber";

export const generateRandomStyles = () => {
  const borderWidth = getRandomNumber({ max: 15 });
  const borderRadius = getRandomNumber({ max: 35 });
  const backgroundColor = getRandomColor();
  const transform = `rotate(${
    (Math.round(getRandomNumber({ max: 10 }) * (Math.random() - 0.5) * 2) *
      100) /
    100
  }deg)`;

  return { borderWidth, borderRadius, backgroundColor, transform };
};
