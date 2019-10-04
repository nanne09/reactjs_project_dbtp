import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import batiment from '/img/NosMetiers/batiment.jpg';
import batiment_red from '/img/NosMetiers/batiment_red.jpg';

import ouvragesPublics from '/img/NosMetiers/ouvragesPublics.jpg';
import ouvragesPublics_red from '/img/NosMetiers/ouvragesPublics_red.jpg';

import rsxHumides from '/img/NosMetiers/rsxHumides.jpg';
import rsxHumides_red from '/img/NosMetiers/rsxHumides_red.jpg';

import rsxSecs from '/img/NosMetiers/rsxSecs.jpg';
import rsxSecs_red from '/img/NosMetiers/rsxSecs_red.jpg';

import valorisation from '/img/NosMetiers/valorisation.jpg';
import valorisation_red from '/img/NosMetiers/valorisation_red.jpg';

class NavMetiers extends Component {
    state = {}

    handleMetierClick = (choice) => this.setState({ activeItem: choice })

    render () {
        console.log(this.state)
        const { activeItem } = this.state
        return (
            <>
                <h2>Nos Métiers</h2>
                <p>DBTP met son expertise au service des collectivités, des entreprises et des particuliers dans 5 domaines d\'expertise.</p>
                <Card.Group itemsPerRow={5}>
                    <Card
                        image={
                            activeItem === 'batiment' ?
                            batiment_red :
                            batiment
                        }
                        alt='activité bâtiment'
                        header='Bâtiment'
                        description='Du gros oeuvre à la construction de site industriel.'
                        onClick={() => this.handleMetierClick('batiment')}
                    />
                    <Card
                        image={
                            activeItem === 'ouvragesPublics' ?
                            ouvragesPublics_red :
                            ouvragesPublics
                        }
                        alt='activité ouvrages publics'
                        header='Ouvrages publics'
                        description='Réalisation de crèches, mairies et centres culturels.'
                        onClick={() => this.handleMetierClick('ouvragesPublics')}
                    />
                    <Card
                        image={
                            activeItem === 'rsxHumides' ?
                            rsxHumides_red :
                            rsxHumides
                        }
                        alt='activité réseaux humides'
                        header='Réseaux Humides'
                        description='Gestion des réseaux : eau, chauffage urbain.'
                        onClick={() => this.handleMetierClick('rsxHumides')}
                    />
                    <Card
                        image={
                            activeItem === 'rsxSecs' ?
                            rsxSecs_red :
                            rsxSecs
                        }
                        alt='activité réseaux secs'
                        header='Réseaux Secs'
                        description='Gestion des réseaux : électricité, gaz, fibre optique.'
                        onClick={() => this.handleMetierClick('rsxSecs')}
                    />
                    <Card
                        image={
                            activeItem === 'valorisation' ?
                            valorisation_red :
                            valorisation
                        }
                        alt='activité recyclage des matériaux'
                        header='Recyclage des matériaux'
                        description='Gestion à 360 du cycle de vie des déchêts.'
                        onClick={() => this.handleMetierClick('valorisation')}
                    />
                </Card.Group>  
            </>
        )
    }
}

export default NavMetiers