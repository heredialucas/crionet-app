import { useLazyQuery } from "@apollo/client";
import { FIND_COUNTRY } from "../findCountry/queriesFindCountry";
import { useState, useEffect } from "react";
import { Country, FindCountryQuery } from "../../interfaces";

export const useFindCountry = ({ code }: { code: string | undefined }) => {
  const [findCountry, { error, loading, data }] =
    useLazyQuery<FindCountryQuery>(FIND_COUNTRY);
  const [detail, setDetail] = useState<Country | null>(null);

  useEffect(() => {
    findCountry({ variables: { code } });
  }, [findCountry, code]);

  useEffect(() => {
    if (data) {
      setDetail(data.country);
    }
  }, [data]);

  return { detail, loading, error };
};
