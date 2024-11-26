import { gql } from '@apollo/client'

export const FIND_COUNTRY = gql`
	query findCountry($code: ID!) {
		country(code: $code) {
			name
			code
			native
			phone
			continent {
				name
			}
			capital
			currency
			languages {
				name
			}
			emoji
			emojiU
			states {
				name
			}
		}
	}
`
