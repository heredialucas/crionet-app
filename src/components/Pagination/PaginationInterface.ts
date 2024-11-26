import { AllCountriesQuery, Country } from "../../apollo/interfaces";

export interface PaginationI {
    data: AllCountriesQuery | undefined;
    filterCountries: Country[] | undefined;
    groupBy: string;
}