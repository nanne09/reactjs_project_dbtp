// Instanciation des constantes pour le format email et phone requis
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const phoneRegex = RegExp(/^(0|\+33)[1-9]([-.: ]*?[0-9]{2}){4}$/);
const nameRegex = RegExp(/^[a-zA-Z]*$/)

export const ValidateInput = (fieldName, value) => {
	let isValid = false
	const fieldValidation = {}

	// Méthode pour changer l'état des state emailValid, phoneValid, ... s'ils ne répondent pas aux exigences Regex
	switch(fieldName) {
		case 'firstName':
			isValid = value.match(nameRegex)
			fieldValidation.valid = isValid === null ? false : true
			fieldValidation.error = isValid ? undefined : ' Not a valid first name'
			return fieldValidation
		case 'lastName':
			isValid = value.match(nameRegex)
			fieldValidation.valid = isValid === null ? false : true
			fieldValidation.error = isValid ? undefined : ' Not a valid last name'
			return fieldValidation
		case 'societyName':
			isValid = value.match(nameRegex)
			fieldValidation.valid = isValid === null ? false : true
			fieldValidation.error = isValid ? undefined : ' Not a valid society name'
			return fieldValidation		
		case 'email':
			isValid = value.match(emailRegex)
			fieldValidation.valid = isValid === null ? false : true
			fieldValidation.error = isValid ? undefined : ' Not a valid email address'
			return fieldValidation
		case 'phone':
			isValid = value.match(phoneRegex)
			fieldValidation.valid = isValid === null ? false : true
			fieldValidation.error = isValid ? undefined : 'Not a valid phone number'
			return fieldValidation
		case 'message':
			isValid = value.length > 0
			fieldValidation.valid = isValid === null ? false : true
			fieldValidation.error = isValid ? undefined : 'Please enter your message'
			return fieldValidation
		case 'checkbox':	
			fieldValidation.valid = value
			fieldValidation.error = value ? undefined : 'You must agree to the terms and conditions'
			return fieldValidation			
		default:
			break
	}
}