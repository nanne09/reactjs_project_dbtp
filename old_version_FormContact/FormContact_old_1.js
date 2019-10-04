import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, TextArea, Message } from 'semantic-ui-react'


// input basic du formulaire de contact : firstName, lastName, societyName, email, phone  
const BlocInput = (props) => {
    console.log('dans notre BlocInput la valeur de renderMessageError :', props.renderMessageError)
    console.log('valeur de input_valid dans BlocInput :', props.input_valid)
    return (
        <>
            <Form.Field
                required
                error={!props.input_valid}
                control={props.control}
                label={props.placeholder}
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                value={props.value}
					 onChange={(event) => props.onChangeInput(event, props.id)}
					 onFocus={props.onFocus}
					 onBlur={props.onBlur}
            />
            {/* <Message
                error={props.input_valid}
                content={props.renderMessageError}
            /> */}
        </>
    )
};

// initialisation des données du formulaire
const initialState = {
    object: "",
    firstName: "",
    lastName : "",
    societyName: "",
    email: "",
    phone: "",
    message: "",
    rgpdIsChecked: false
};

// constante pour le format email et phone requis
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const phoneRegex = RegExp(/^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$/);

 // choix multiple (select) pour l'input id=object
const objectOptions = [
    { id: '0', text: "- Sélection -", value: "", disabled: "disabled", hidden:"hidden"},
    { id: '1', text: "Appel d'Offre", value: "AO" },
    { id: '2', text: "Demande d'information", value: "INFO" },
    { id: '3', text: "Demande de rencontre", value: "RDV" }
    ]


class FormContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...initialState,
            formErrors: {email: "", phone: ""},
            emailValid: false,
            //phoneValid: false,
            formValid: false,
        }
    }

    // Méthode pour que la donnée saisie en "input text" devienne la valeur de l'input text.
    onChangeInput = (e, key) => {
        const value = e.target.value;
        this.setState({
            [key]: value,
        });
        this.validateField(key, value)
    }

    // Méthode pour la checkbox "RGPD" (flip boolean value)
    onChangeCheckbox = () => {
        this.setState({
            rgpdIsChecked: !this.state.rgpdIsChecked
        });
    }

    // Méthode pour activer l'attribut onBlur de nos champs de saisie
     onChangeBlur = () => {
        console.log('entrée onChangeBlur')
        this.setState({
            validating: true
        });
    }

    // Méthode pour activer l'attribut onFocus de nos champs de saisie
    onChangeFocus = () => {
        console.log('entrée onChangeFocus')
        this.setState({
            validating: false
        });
    }

    // Méthode pour faire apparaître le message d'erreur lorsque le format de saisie est invalide
    renderPhoneError = () => {
        console.log('entrée renderPhoneError', this.state.validating, this.state.formErrors.phone !== '' )
        if (this.state.validating && this.state.formErrors.phone !== '') {
            console.log('la valeur de notre formErrors.phone :', this.state.formErrors.phone);
            console.log('entrée dans le return de renderPhoneError');
            return (
               <div>{this.state.formErrors.phone}</div>
            )
		  }
		  return null
    }

    renderMessageError = () => 
        <div>
            {Object.values(this.state.formErrors).map((element, i) => {
                if (this.state.validating && element !== '') {
                    return (
                        console.log('element qui sera retourné : ', element),
                        <div key={i}>{element}</div>
                    )
                }
                return null
            })
            }
        </div>

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(emailRegex);
            fieldValidationErrors.email = emailValid ? '' : ' invalid email address';
            emailValid = emailValid === null ? false : true
            break;
          case 'phone':
            phoneValid = value.match(phoneRegex);
            fieldValidationErrors.phone = phoneValid ? '' : ' invalid phone number';
            phoneValid = phoneValid === null ? false : true
            break;
          default:
            break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            phoneValid: phoneValid,
            formValid: emailValid && phoneValid
        });
      }

    // Méthode avec "fetch" pour que lors de la soumission du formulaire, les données soient envoyées en BDD (méthode POST)
    onSubmitForm = (e) => {
        e.preventDefault() 
        if (this.state.formValid) {
            // données saisies par l'utilisateur
            const user = {
                object: this.state.object,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                societyName: this.state.societyName,
                email: this.state.email,
                phone: this.state.phone,
                message: this.state.message,
                rgpdIsChecked: this.state.rgpdIsChecked
            };

            // envoi à la BDD
            const myInit = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
                // mode: 'cors',
            };
            
            fetch('http://localhost:4000/users/', myInit).then(response => console.log(response))
            
            // clear the form if form inputs respect all requirements.
            this.setState(initialState)
        }
    }


    // Ce qu'on retourne en Front
    render() {
        console.log('phoneValid :', this.state.phoneValid)
        console.log(this.state)
        console.log('state validating :', this.state.validating)
        console.log('nature de this.state.formErrors', this.state.formErrors)
        console.log('nature de Object.values{this.state.formErrors} :', Object.values(this.state.formErrors))
        return (
            <div>
                <h1>Nous contacter</h1>
                <Form>
                    <Form.Field 
                        required
                        control='select'
                        id="object"
                        type="select"
                        value={this.state.object}
                        label="Objet"
                        onChange={(event) => this.onChangeInput(event, "object")}
                    >
                        {objectOptions.map(element => 
                            <option key={element.id} disabled={element.disabled} hidden={element.hidden} value={element.value}>{element.text}</option>
                        )}
                    </Form.Field>
                    <Form.Group widths="equal">
                        <BlocInput
                            control={Input}
                            id="firstName"
                            type="text"
                            value={this.state.firstName}
                            placeholder="Prénom"
                            onChangeInput={this.onChangeInput} 
                        />
                        <BlocInput 
                            control={Input}
                            id="lastName"
                            type="text"
                            value={this.state.lasstName}
                            placeholder="Nom"
                            onChangeInput={this.onChangeInput}
                        />
                        <BlocInput 
                            control={Input}
                            id="societyName"
                            type="text"
                            value={this.state.societyName}
                            placeholder="Nom de la société"
                            onChangeInput={this.onChangeInput}
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <BlocInput 
                            control={Input}
                            id="email"
                            type="email"
                            value={this.state.email}
                            placeholder="Email"
                            onChangeInput={this.onChangeInput}
                        />
                        <Message error={false}>
                            bonjour
                        </Message>
                        <BlocInput
                            control={Input}
                            id="phone"
                            type="tel"
                            input_valid={this.state.phoneValid ? true : false}
                            value={this.state.phone} 
                            placeholder="Téléphone"
                            onChangeInput={this.onChangeInput}
                            onFocus={this.onChangeFocus}
                            onBlur={this.onChangeBlur}
                            renderMessageError={this.renderMessageError()}
                        />
                        <Message
                            error={this.state.phoneValid ? true : false}
                            content={this.renderMessageError()}
                        />
                                {/* {this.renderPhoneError()} */}
                                {/* {this.renderMessageError()} */}
                    </Form.Group>
                    <BlocInput 
                        control={TextArea}
                        id="message"
                        type="textarea"
                        value={this.state.message}
                        placeholder="Message"
                        onChangeInput={this.onChangeInput}
                    />
                    <Form.Field 
                        required
                        control={Checkbox}
                        id="rgpdIsChecked"
                        checked={this.state.rgpdIsChecked}
                        label="I agree to the Terms and Conditions"
                        onChange={this.onChangeCheckbox}
                    />
                    <Form.Field control={Button} onClick={this.onSubmitForm} disabled={!this.state.formValid}>Envoyer</Form.Field> 
                </Form>                    
            </div>
        )
    }
};

export default FormContact


