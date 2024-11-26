import style from "./Cards.module.css";
import Card from "../Card/Card";

import { filterLanguages } from "../../helpers/filters/filterLanguages";
import { CardsI } from "./CardsInterface";
import { Country } from "../../apollo/interfaces";

const Cards = ({
  countries,
  setPage,
  countrieForPage,
  data,
  groupCountries,
}: CardsI) => {
  filterLanguages({ array: groupCountries });
  const countriesLength = data?.countries?.length || 0;
  const pagesNumber = [];
  function onPage(value: number) {
    setPage(value);
  }
  for (let i = 1; i <= Math.ceil(countriesLength / countrieForPage); i++) {
    pagesNumber.push(i);
  }

  return (
    <>
      <div className={style.containerPagination}>
        {pagesNumber.map((value, index) => {
          return (
            <button
              key={index}
              className="button"
              onClick={() => onPage(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div className={style.containerCards}>
        {groupCountries?.length > 0
          ? groupCountries.map((groupCountry, index) => {
              return (
                <div className={style.containerGroup} key={index}>
                  <h2 className={style.h2Group}>
                    {groupCountry[0] || "Not Found"}
                  </h2>
                  {groupCountry[1]?.map((country: Country) => {
                    return <Card key={country.code} country={country} />;
                  })}
                </div>
              );
            })
          : countries?.map((country) => {
              return <Card key={country.code} country={country} />;
            })}
      </div>
    </>
  );
};
export default Cards;
