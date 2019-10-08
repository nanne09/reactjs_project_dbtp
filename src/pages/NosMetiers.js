import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import * as NavBarMetier from '../components/NosMetiers/NavBarMetier.json';
import TypeMetier from '../components/NosMetiers/TypeMetier';
import BreadcrumbMetier from '../components/Breadcrumb';
import DescriptionMetier from '../components/NosMetiers/DescriptionMetier';

class NosMetiers extends Component {
    constructor (props) {
        super(props)
        this.state = {
            metierName: '', 
            metierHeader: '',
        }
    }

    handleMetierClick = (e, choiceName, choiceHeader) => {
        e.preventDefault();

        // mémorisation de la sélection du métier par le user
        this.setState({ 
            metierName: choiceName,
            metierHeader: choiceHeader  
        });
    }

    render () {

        console.log(this.state.metierName);

        return (
            <>
                <BreadcrumbMetier forwardValue={this.state.metierHeader}/>
                <h1>Nos Métiers</h1>
                <Card.Group itemsPerRow={5}>
                    { Object.values(NavBarMetier.bankImage).map((value, i) => <TypeMetier key={i} data={value} forwardMethod={(e) => this.handleMetierClick(e, value.name, value.header)}/>)}
                </Card.Group>
                <br/>
                <DescriptionMetier forwardMetier={this.state.metierName}/>
            </>
        )
    }

}

export default NosMetiers