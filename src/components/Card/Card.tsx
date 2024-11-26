import { Link } from "react-router";
import style from "./Card.module.css";
import { Country } from "../../apollo/interfaces";
const Card = ({ country }: { country: Country }) => {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <h4>Flag</h4>
        <span>{country.emoji}</span>
      </div>
      <div className={style.rightContainer}>
        {country.capital && (
          <div>
            <h4>Capital:</h4>
            <span>{country.capital}</span>
          </div>
        )}
        <h2>{country.name}</h2>
        <div className={style.containerLanguage}>
          {country.languages.map((language, index) => (
            <span key={index}>{language.name}</span>
          ))}
        </div>
        <Link className={style.btn} to={`/detail/${country.code}`}>
          See more
        </Link>
      </div>
    </div>
  );
};
export default Card;
