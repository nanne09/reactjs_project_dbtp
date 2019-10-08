import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

class DescriptionMetier extends Component {
    constructor (props) {
        super(props)
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/metiers/')
            .then(res => res.json())
            .then( json => { this.setState({
                loading: false,
                data: json
            }) 
        })
    }

    render () {

        const { forwardMetier} = this.props ;
        const { data } = this.state;

        console.log(forwardMetier);

        if (forwardMetier === '' || this.state.loading) {
            return false
        }
        else {
            return (
                Object.values(data).map((item, i) => (
                    item.type === forwardMetier ? 
                    <Container key={i} textAlign='justified'><b>{item.title}</b><Divider /><p>{item.article}</p></Container>:
                    false
                ))
            )
        }
    }
}

export default DescriptionMetier