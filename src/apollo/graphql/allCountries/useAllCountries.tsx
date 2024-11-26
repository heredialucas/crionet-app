import { useQuery } from "@apollo/client";
import { ALL_COUNTRIES } from "./queriesAllCountries";
import { AllCountriesQuery } from "../../interfaces";

export const useAllCountries = () => {
  const result = useQuery<AllCountriesQuery>(ALL_COUNTRIES);
  return result;
};
