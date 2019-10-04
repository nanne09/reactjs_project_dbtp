import React, { Component} from 'react'
import { Form } from 'semantic-ui-react'
import { ValidateInput } from './validateInput'

// input basic du formulaire de contact : checkbox (boolean, sa valeur 'true' or 'false')

class TemplateCheckbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: false,
            valid: false,
            error: undefined
			}
		}
    
    // Méthode pour que la donnée saisie par le user devienne la valeur de l'input (type="checkbox")
    handleChange = (event, fieldName) => {
        this.setState({
            value: event.target.checked,
        }, 
        () => {
            const isValidField = ValidateInput(fieldName, this.state.value);
            const isVF_Array = Object.values(isValidField);
            this.setState({
                valid: isVF_Array[0],
                error: isVF_Array[1]
            });
        })
    }

     render() {

        return (
            <Form.Field
                required
                control={this.props.control}
                label={this.props.label}
                type="checkbox"
                id="checkbox"
                checked={this.state.value}
                onChange={(e) => this.handleChange(e, 'checkbox')}
                error ={this.state.error}
            />
        )
    }
}

export default TemplateCheckbox