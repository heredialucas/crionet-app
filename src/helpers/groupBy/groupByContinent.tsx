import { groupBy } from "lodash";
import { Country } from "../../apollo/interfaces";

export const groupByContinent = ({ data }: { data: Country[] | undefined }) => {
  const groupCountries = groupBy(data, (country) => country.continent.name);
  return Object.entries(groupCountries);
};
