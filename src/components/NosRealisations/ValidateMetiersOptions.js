export const ValidateMetiersOptions = (fieldName) => {

	 // Options pour l'input de type select selon le type de métier
	 const NoOptions = [
	 ]

	 const BatimentOptions = [
		{ id: '1', text: "Bureaux", value: "bureaux" },
		{ id: '2', text: "Commerces", value: "commerces" },
		{ id: '3', text: "Sites industriels", value: "sites_industriels"},
		{ id: '4', text: "Logements", value: "logements" }
		]
	
	const OuvragesPublicsOptions = [
		{ id: '1', text: "Equipements publics", value: "equipements_publics" },
		{ id: '2', text: "Médico-social", value: "medico_social" },
		{ id: '3', text: "Culture et loisirs", value: "culture_loisirs" } ,
		{ id: '4', text: "Infrasctructures de transport", value: "infrasctructures_transport"}
		]
	
	const ReseauxHumidesOptions = [
		{ id: '1', text: "Canalisations et réseaux", value: "canalisations_reseaux" },
		{ id: '2', text: "Usine de traitement d'eau usée et d'eau potable", value: "traitement_eau_use	e_eau_potable" }
		]
	
	const ReseauxSecsOptions = [
		{ id: '1', text: "Réseaux électriques", value: "reseaux_electriques" },
		{ id: '2', text: "Réseaux gaz", value: "reseaux_gaz" },
		{ id: '3', text: "Fibre optique", value: "fibre_optique" }
		]

	// Méthode pour retourner les "options" de l'input de type "select" en fonction du métier requêté par le user :
	switch(fieldName) {
		case 'batiment':
			return BatimentOptions
		case 'ouvrages_publics':
			return OuvragesPublicsOptions
		case 'reseaux_humides':
			return ReseauxHumidesOptions		
		case 'reseaux_secs':
			return ReseauxSecsOptions
		case '':
			return NoOptions	
		default:
			break
	}
}