import { Country } from "../../apollo/interfaces";

export const filterLanguages = ({
  array,
}: {
  array: [string, Country[]][];
}) => {
  const res = array.map((a) => {
    const language = a[0].split(",");
    a[0] = language[0];
    return array;
  });
  return res;
};
