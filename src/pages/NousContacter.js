import React, { Component } from 'react';
import { Grid, Form, Input, TextArea, Button, Checkbox, Select } from 'semantic-ui-react';
import { withRouter } from 'react-router';

import TypeClient from '../components/NousContacter/typeClient';
import TemplateSelect from '../components/NousContacter/templateSelect';
import TemplateInput  from '../components/NousContacter/templateInput';
import TemplateCheckbox from '../components/NousContacter/templateCheckbox';

// Initialisation des données du formulaire
const initialState = {
    client: 'Collectivité',
    object: '',
    firstName: '',
    lastName : '',
    societyName: '',
    email: '',
    phone: '',
    message: '',
    isChecked: false,
};


class NousContacter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initialState
        }
	}   

    // Méthode pour récupérer le type de client
    handleButtonChange = (clientName) => {
        this.setState({
            client: clientName,
            object: ''
        }); 
    }

    // Méthode pour récupérer la valeur du champ "Objet"
    handleSelectChange = (e, {value}) => {
        const resultA = Object.values({value})
        const resultB = resultA[0]
        this.setState({ object : resultB })
    }

    // Méthode pour récupérer les valeurs de chaque input
    handleInputChange = (event, id) => {
        console.log(event.target.value)
        this.setState({
            [id]: event.target.value,
        });
    }

    // Méthode pour rediriger l'utilisateur après la soumission du formulaire de contact
    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.history.push('/merci');
    }

    render() {

        return (
            <>
                <h1>Nous contacter</h1>
                <Grid columns={6} textAlign='center'>
                    <TypeClient 
                        id='Collectivité' 
                        iconName='university'
                        forwardMethod={() => this.handleButtonChange('Collectivité')}
                        active={this.state.client}
                    />
                    <TypeClient 
                        id='Concessionnaire'
                        iconName='lightbulb outline'
                        forwardMethod={() => this.handleButtonChange('Concessionnaire')}
                        active={this.state.client}
                    />
                    <TypeClient 
                        id='Entreprise'
                        iconName='briefcase'
                        forwardMethod={() => this.handleButtonChange('Entreprise')}
                        active={this.state.client}
                    />
                    <TypeClient 
                        id='Particulier'
                        iconName='home'
                        forwardMethod={() => this.handleButtonChange('Particulier')}
                        active={this.state.client}
                    />
                    <TypeClient
                        id='Candidat'
                        iconName='file alternate'
                        forwardMethod={() => this.handleButtonChange('Candidat')}
                        active={this.state.client}
                    />
                    <TypeClient
                        id='Autre'
                        iconName='ellipsis horizontal'
                        forwardMethod={() => this.handleButtonChange('Autre')}
                        active={this.state.client}
                    />
                </Grid>
                <Form>
                    <TemplateSelect
                        control={Select}
                        id={this.state.client}
                        label="Objet"
                        placeholder="- Sélection -"
                        forwardValue={this.state.object}
                        forwardMethod={this.handleSelectChange}
                    />
                    <Form.Group widths="equal">
                        <TemplateInput
                            control={Input}
                            id="firstName"
                            type="text"
                            placeholder="Prénom"
                            forwardValue={this.state.firstName}
                            forwardMethod={(event)=>this.handleInputChange(event, 'firstName')}
                        />
                        <TemplateInput 
                            control={Input}
                            id="lastName"
                            type="text"
                            placeholder="Nom"
                            forwardValue={this.state.lastName}
                            forwardMethod={(event)=>this.handleInputChange(event, 'lastName')}
                        />
                        <TemplateInput 
                            control={Input}
                            id="societyName"
                            type="text"
                            placeholder="Nom de la société"
                            forwardValue={this.state.societyName}
                            forwardMethod={(event)=>this.handleInputChange(event, 'societyName')}
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <TemplateInput  
                            control={Input}
                            id="email"
                            type="email"
                            placeholder="Email"
                            forwardValue={this.state.email}
                            forwardMethod={(event)=>this.handleInputChange(event, 'email')}
                        />
                        <TemplateInput 
                            control={Input}
                            id="phone"
                            type="tel"
                            placeholder="Téléphone"
                            forwardValue={this.state.phone}
                            forwardMethod={(event)=>this.handleInputChange(event, 'phone')}
                        />
                    </Form.Group>
                    <TemplateInput
                        control={TextArea}
                        id="message"
                        type="textarea"
                        placeholder="Message"
                        forwardValue={this.state.message}
                        forwardMethod={(event)=>this.handleInputChange(event, 'message')}
                    />
                    <TemplateCheckbox
                        control={Checkbox}
                        id="checkbox"
                        type="checkbox"
                        label="I agree to the Terms and Conditions"
                    />
                    <Form.Field control={Button} onClick={this.onSubmitForm}>Envoyer</Form.Field> 
                </Form>
            </>
        )
    }
};

export default withRouter(NousContacter)


