import React, { Component} from 'react';
import { Form } from 'semantic-ui-react';
import { ValidateMetiersOptions } from './ValidateMetiersOptions';

// selection de la page Nos Réalisations

class RealisationsSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    handleOptions = (metierName) => {
        const isValidMetier = ValidateMetiersOptions(metierName);
        return isValidMetier
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

export default RealisationsSelect