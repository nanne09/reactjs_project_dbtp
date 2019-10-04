export const ValidateOptions = (fieldName) => {

	 // Options pour l'input de type select (id="object") selon le type de client
	 const CollectiviteOptions = [
		{ id: '1', text: "Appel d'Offre", value: "AO" },
		{ id: '2', text: "Question sur l'entreprise", value: "INFO" },
		{ id: '3', text: "Demande de rencontre", value: "RDV" }
		]
	
	const ConcessionnaireOptions = [
		{ id: '1', text: "Appel d'Offre", value: "AO" },
		{ id: '2', text: "Question sur les astreintes", value: "ASTREINTE" },
		{ id: '3', text: "Question sur l'entreprise", value: "INFO" },
		{ id: '4', text: "Demande de rencontre", value: "RDV" }
		]
	
	const EntrepriseOptions = [
		{ id: '1', text: "Demande de devis", value: "AO" },
		{ id: '2', text: "Question sur l'entreprise", value: "INFO" },
		{ id: '3', text: "Demande de rencontre", value: "RDV" }
		]
	
	const ParticulierOptions = [
		{ id: '1', text: "Demande de devis", value: "AO" },
		{ id: '2', text: "Question sur l'entreprise", value: "INFO" },
		{ id: '3', text: "Demande de rencontre", value: "RDV" }
		]
	
	const CandidatOptions = [
		{ id: '1', text: "Candidature spontanée", value: "CS" },
		{ id: '2', text: "Postuler pour une offre d'emploi", value: "POE" },
		]
	
	const AutreOptions = [
		{ id: '1', text: "Question sur l'entreprise", value: "INFO" },
		{ id: '2', text: "Demande de rencontre", value: "RDV" },
		{ id: '3', text: "Autre demande", value: "AUTRE" }
		]

	// Méthode pour changer l'état des state emailValid, phoneValid, ... s'ils ne répondent pas aux exigences Regex
	switch(fieldName) {
		case 'Collectivité':
			return CollectiviteOptions
		case 'Concessionnaire':
			return ConcessionnaireOptions
		case 'Entreprise':
			return EntrepriseOptions		
		case 'Particulier':
			return ParticulierOptions
		case 'Candidat':
			return CandidatOptions
		case 'Autre':
			return AutreOptions		
		default:
			break
	}
}