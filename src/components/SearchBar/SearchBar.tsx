import { Country } from "../../apollo/interfaces";
import { FaSearch } from "react-icons/fa";
import { Loading } from "../Loading/Loading";
import { SearchI } from "./SearchBarIterface";
import GroupCountries from "../GroupCountries/GroupCountries";
import Pagination from "../Pagination/Pagination";
import React, { useState } from "react";
import style from "./SearchBar.module.css";

export const Search = ({ type, data, loading }: SearchI) => {
  const [filterCountries, setFilterCountries] = useState<Country[] | undefined>(
    []
  );
  const [groupBy, setGroupBy] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      setGroupBy("");
    } else {
      setFilterCountries(
        data?.countries.filter((countries) =>
          countries.name
            .toLowerCase()
            .trim()
            .includes(e.target.value.toLowerCase().trim())
        )
      );
    }
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.containerInput}>
          <FaSearch className={style.icon} />
          <input
            className={style.input}
            type={type}
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>
      <GroupCountries groupBy={groupBy} setGroupBy={setGroupBy} />
      {loading ? (
        <Loading />
      ) : (
        <Pagination
          data={data}
          filterCountries={filterCountries}
          groupBy={groupBy}
        />
      )}
    </>
  );
};
