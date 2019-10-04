import React, { Component } from 'react';

import SimpleMap from '../components/NousTrouver/Localisation'


class NousTrouver extends Component {
    render () {
        return (
            <>
            <h1>Localisation du bureau</h1>
            <SimpleMap/>
            </>
        )
    }
}

export default NousTrouver