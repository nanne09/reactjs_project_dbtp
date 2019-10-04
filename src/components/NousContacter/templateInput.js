import React, { Component} from 'react';
import { Form } from 'semantic-ui-react';
import { ValidateInput } from './validateInput';

// input basic du formulaire de contact : firstName, lastName, societyName, email, phone  

class TemplateInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valid: false,
            error: undefined
			}
		}

    // Méthode pour vérifier la validité du champ saisi et si invalide, alors l'état error prend la valeur du message d'erreur selon l'id de l'input
    handleBlur = (fieldName) => {
        const isValidField = ValidateInput(fieldName, this.props.forwardValue);
        const isVF_Array = Object.values(isValidField);
		this.setState({
            valid: isVF_Array[0],
            error: isVF_Array[1]
        });
	}

    // Méthode pour réinitialiser l'état de la validité et le message d'erreur du champ de saisie (le user modifie le champ, ses états 'valid' et 'error' devront être testés à nouveau)
    handleFocus = () => {
        const resetValidField = {valid: false, error : undefined};
        const resetVF_Array = Object.values(resetValidField);
        this.setState({
            valid: resetVF_Array[0],
            error: resetVF_Array[1]
        });
    }

     render() {
        return (
            <Form.Field
                required
                control={this.props.control}
                label={this.props.placeholder}
                type={this.props.type}
                id={this.props.id}
                placeholder={this.props.placeholder}
                value={this.props.forwardValue}
                onChange={this.props.forwardMethod}
                onFocus={() => this.handleFocus()}
                onBlur={() => this.handleBlur(this.props.id)}
                error ={this.state.error}
            />
        )
    }
}

export default TemplateInput