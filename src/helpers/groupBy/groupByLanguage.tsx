import { groupBy } from "lodash";
import { Country } from "../../apollo/interfaces";

export const groupByLanguage = ({ data }: { data: Country[] | undefined }) => {
  const groupCountries = groupBy(data, (country) =>
    country.languages.map((language) => language.name)
  );
  return Object.entries(groupCountries);
};
