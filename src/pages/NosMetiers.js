import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import TypeMetier from '../components/NosMetiers/TypeMetier';

class NosMetiers extends Component {
    constructor (props) {
        super(props)
        this.state = {
            metier: ''
        }
    }

    handleMetierClick = (choice) => {
        this.setState({ metier: choice });
    }

    render () {

        const bankImage = {
            batiment: {
                name: 'batiment',
                image: '/img/NosMetiers/batiment.jpg',
                header: 'Bâtiment',
                desc: 'Du gros oeuvre à la construction de site industriel.',
                alt: 'activité bâtiment'
            },
            ouvragesPublics: {
                name: 'ouvragesPublics',
                image: '/img/NosMetiers/ouvragesPublics.jpg',
                header: 'Ouvrages publics',
                desc: 'Réalisation de crèches, mairies et centres culturels.',
                alt:'activité ouvrages publics'
            }, 
            rsxHumides: {
                name : 'rsxHumides',
                image: '/img/NosMetiers/rsxHumides.jpg',
                header: 'Réseaux Humides',
                desc: 'Gestion des réseaux : eau, chauffage urbain.',
                alt:'activité réseaux humides'
            }, 
            rsxSecs: {
                name: 'rsxSecs',
                image: '/img/NosMetiers/rsxSecs.jpg',
                header: 'Réseaux Secs',
                desc: 'Gestion des réseaux : électricité, gaz, fibre optique.',
                alt:'activité réseaux secs'
            }, 
            valorisation: {
                name: 'valorisation',
                image: '/img/NosMetiers/valorisation.jpg',
                header: 'Recyclage des matériaux',
                desc: 'Gestion à 360 du cycle de vie des déchêts.',
                alt:'activité recyclage des matériaux'
            }
        }

        return (
            <>
                <Card.Group itemsPerRow={5}>
                    { Object.values(bankImage).map((value, i) => <TypeMetier key={i} data={value} forwardMethod={() => this.handleMetierClick(value.name)}/>)}
                </Card.Group>
            </>
        )
    }

}

export default NosMetiers