import style from "./GroupCountries.module.css";
import { GroupCountriesProps } from "./GroupCountriesInterface";
const GroupCountries = ({ setGroupBy, groupBy }: GroupCountriesProps) => {
  function setContinent() {
    setGroupBy("continent");
  }

  function setLanguage() {
    setGroupBy("language");
  }
  function setClear() {
    setGroupBy("");
  }
  return (
    <div className={style.container}>
      <h2>Group by</h2>
      <button
        className={groupBy === "continent" ? style.btnOn : style.btnOff}
        onClick={setContinent}
      >
        Continent
      </button>
      <button
        className={groupBy === "language" ? style.btnOn : style.btnOff}
        onClick={setLanguage}
      >
        Language
      </button>
      <button
        className={groupBy === "" ? style.btnOn : style.btnOff}
        onClick={setClear}
      >
        Clear
      </button>
    </div>
  );
};
export default GroupCountries;
