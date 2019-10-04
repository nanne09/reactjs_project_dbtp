import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"

class NavBar extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {}
    // }
    state = {}

    handleItemClick = ({ name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        //console.log(this.state)
        return (
            <Menu stackable>
                <Menu.Item>
                    <img src='/img/NavBar/logodbtp.jpg' alt="logo entreprise dbtp"/>
                </Menu.Item>
                
                <Menu.Item
                    as="span"
                    name='accueil'
                    active={activeItem === 'accueil'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/">ACCUEIL</Link>                
                </Menu.Item>

                <Menu.Item
                    as="span"
                    name='entreprise'
                    active={activeItem === 'entreprise'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/entreprise">L'ENTREPRISE</Link>                
                </Menu.Item>
                
                <Menu.Item
                    as="span"
                    name='metiers'
                    active={activeItem === 'metiers'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/metiers">NOS METIERS</Link>                
                </Menu.Item>
                
                <Menu.Item
                    as="span"
                    name='realisations'
                    active={activeItem === 'realisations'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/realisations">NOS REALISATIONS</Link>                
                </Menu.Item>
                
                <Menu.Item
                    as="span"
                    name='engagements'
                    active={activeItem === 'engagements'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/engagements">NOS ENGAGEMENTS</Link>                
                </Menu.Item>

                <Menu.Item
                    as='span'
                    name='contact'
                    active={activeItem === 'contact'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/contact">NOUS CONTACTER</Link>
                </Menu.Item>

                <Menu.Item
                    as='span'
                    name='localisation'
                    active={activeItem === 'localisation'}
                    onClick={this.handleItemClick}
                >
                    <Link to="/localisation">NOUS TROUVER</Link>
                </Menu.Item>

            </Menu>
        )
    }
};

export default NavBar
