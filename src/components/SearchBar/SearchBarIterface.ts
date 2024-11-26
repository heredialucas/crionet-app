import { AllCountriesQuery } from "../../apollo/interfaces";

export interface SearchI {
    type: string;
    data: AllCountriesQuery | undefined;
    loading: boolean;
}