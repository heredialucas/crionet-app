import Cards from "../Cards/Cards";
import { groupByContinent } from "../../helpers/groupBy/groupByContinent";
import { groupByLanguage } from "../../helpers/groupBy/groupByLanguage";
import { PaginationI } from "./PaginationInterface";

import style from "./Pagination.module.css";

import { useState } from "react";
import { AllCountriesQuery, Country } from "../../apollo/interfaces";

export default function Pagination({
  data,
  filterCountries,
  groupBy,
}: PaginationI) {
  let allCountries: AllCountriesQuery | undefined;
  let countries: Country[] | undefined;
  let groupCountries: [string, Country[]][] = [];
  const [page, setPage] = useState(1);
  const [countrieForPage] = useState(20);
  const indexLast = page * countrieForPage;
  const indexFirst = indexLast - countrieForPage;

  if (filterCountries !== undefined && filterCountries.length > 0) {
    countries =
      filterCountries.length > 0
        ? filterCountries.slice(indexFirst, indexLast)
        : data?.countries.slice(indexFirst, indexLast);
  }

  if (groupBy === "continent") {
    groupCountries = groupByContinent({ data: countries });
  }
  if (groupBy === "language") {
    groupCountries = groupByLanguage({ data: countries });
  }
  if (filterCountries !== undefined && filterCountries.length > 0) {
    allCountries =
      filterCountries.length > 0
        ? { continents: [], languages: [], countries: filterCountries }
        : data;
  }

  return (
    <div className={style.container}>
      {filterCountries !== undefined && filterCountries.length === 0 ? (
        <h3>You must search a valid country</h3>
      ) : (
        <Cards
          data={allCountries}
          countries={countries}
          groupCountries={groupCountries}
          setPage={setPage}
          countrieForPage={countrieForPage}
        />
      )}
    </div>
  );
}
