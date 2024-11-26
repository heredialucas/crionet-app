export interface AllCountriesQuery {
    continents: Continent[];
    languages: Language[];
    countries: Country[];
}

export interface Continent {
    code: string;
    name: string;
}

export interface Language {
    code: string;
    name: string;
}

export interface State {
    name: string;
}

export interface Country {
    code: string;
    name: string;
    native: string;
    phone: string;
    capital: string | null; // Puede ser null si no hay capital definida
    currency: string | null; // Puede ser null si no hay moneda definida
    emoji: string;
    states: State[];
    continent: Continent;
    languages: Language[];
}

export interface FindCountryQuery {
    country: Country | null; // Puede ser null si no se encuentra el país
}

export interface Country {
    name: string;
    code: string;
    native: string;
    phone: string;
    continent: Continent;
    capital: string | null; // Puede ser null si no hay capital definida
    currency: string | null; // Puede ser null si no hay moneda definida
    languages: Language[];
    emoji: string;
    emojiU: string;
    states: State[];
}

export interface Continent {
    name: string;
}

export interface Language {
    name: string;
}

export interface State {
    name: string;
}