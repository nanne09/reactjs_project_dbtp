import React, { Component } from 'react';
import { Form, Input  } from 'semantic-ui-react';

import TemplateInput from '../components/NousContacter/templateInput'

class NosRealisations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: ''
        }
    }
    
    // Méthode pour récupérer les valeurs de chaque input
    handleInputChange = (event, id) => {
        console.log(event.target.value)
        this.setState({
            [id]: event.target.value,
        });
    }

    render() {
        return (
            <>
                <h1>Nos Réalisations</h1>
                <Form>
                    <Form.Group widths="equal">
                        <TemplateInput
                            control={Input}
                            id="firstName"
                            type="text"
                            placeholder="Filtrer par catégorie"
                            forwardValue={this.state.firstName}
                            forwardMethod={(event)=>this.handleInputChange(event, 'firstName')}
                        />
                    </Form.Group>
                </Form>
            </>
        )           
    }
}

export default NosRealisations