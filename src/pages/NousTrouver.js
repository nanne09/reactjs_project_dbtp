import React, { Component } from 'react';

import DbtpMap from '../components/NousTrouver/Localisation'


class NousTrouver extends Component {
    render () {
        return (
            <>
                <h1>Localisation du bureau</h1>
                <div>
                    <p>DBTP</p>
                    <p>701 Route de Louhans 71380 Epervans</p>
                    <p>Tél : 03 85 90 90 88</p>
                </div>
                <DbtpMap/>
            </>
        )
    }
}

export default NousTrouver