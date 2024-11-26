import { gql } from '@apollo/client'

export const ALL_COUNTRIES = gql`
	query allCountries {
		continents {
			code
			name
		}
		languages {
			code
			name
		}
		countries {
			code
			name
			native
			phone
			capital
			currency
			emoji
			states {
				name
			}
			continent {
				code
				name
			}
			languages {
				code
				name
			}
		}
	}
`
