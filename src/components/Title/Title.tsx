import style from "./Title.module.css";
import { TitleI } from "./TitleInterface";

export const Title = ({ size, contain }: TitleI) => {
  return (
    <>
      <h1 className={style[size]}>{contain}</h1>
    </>
  );
};
