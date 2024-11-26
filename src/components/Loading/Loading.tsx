import style from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.CircleLoading}></div>
    </div>
  );
};
