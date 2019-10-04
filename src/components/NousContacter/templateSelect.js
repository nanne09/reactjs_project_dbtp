import React, { Component} from 'react';
import { Form } from 'semantic-ui-react';
import { ValidateOptions } from './validateOptions';

// input basic du formulaire de contact : select (les options sont obligatoires)

class TemplateSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    handleOptions = (clientName) => {
        const isValidClient = ValidateOptions(clientName);
        return isValidClient
    }

     render() {

        return (
            <Form.Field
                required
                control={this.props.control}
                label={this.props.label}
                type="select"
                placeholder={this.props.placeholder}
                options={this.handleOptions(this.props.id)}
                value={this.props.forwardValue}
                onChange={this.props.forwardMethod}
            />
        )
    }
}

export default TemplateSelect