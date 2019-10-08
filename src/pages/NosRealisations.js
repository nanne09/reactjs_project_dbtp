import React, { Component } from 'react';
import { Form, Select, Button } from 'semantic-ui-react';

import MetiersSelect from '../components/NosRealisations/MetiersSelect';
import RealisationsSelect from '../components/NosRealisations/RealisationsSelect';


class NosRealisations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            metier: '', 
            realisation : ''
        }
    }

    handleSelectMetier = (e, {value}) => {
        const resultA = Object.values({value})
        const resultB = resultA[0]
        this.setState({ 
            metier : resultB,
            realisation : ''
        })
    }

    handleSelectRealisation = (e, {value}) => {
        const resultA = Object.values({value})
        const resultB = resultA[0]
        this.setState({ realisation : resultB })
    }

    onSubmitRequest = (e) => {
        e.preventDefault();
    }
    
    render() {
        console.log(this.state.metier)
        console.log(this.state.realisation)

        return (
            <>
                <h1>Nos Réalisations</h1>
                <Form>
                    <Form.Group widths="equal">
                        <MetiersSelect
                            control={Select}
                            label="Métier"
                            placeholder="- Sélection -"
                            forwardValue={this.state.metier}
                            forwardMethod={this.handleSelectMetier}
                        />
                        <RealisationsSelect
                            control={Select}
                            id={this.state.metier}
                            label="Type de réalisation"
                            placeholder="- Sélection -"
                            forwardValue={this.state.realisation}
                            forwardMethod={this.handleSelectRealisation}
                        />
                    </Form.Group>
                    <Form.Field control={Button} onClick={this.onSubmitRequest}>Rechercher</Form.Field> 
                </Form>
            </>
        )           
    }
}

export default NosRealisations