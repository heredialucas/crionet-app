import { AllCountriesQuery, Country } from "../../apollo/interfaces"

export interface CardsI {
    countries: Country[] | undefined
    setPage: (page: number) => void
    countrieForPage: number
    data: AllCountriesQuery | undefined
    groupCountries: [string, Country[]][]
}