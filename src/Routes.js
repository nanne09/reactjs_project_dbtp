import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Accueil from './pages/Accueil';
import Entreprise from './pages/Entreprise';
import NosMetiers from './pages/NosMetiers' ;
import NosRealisations from './pages/NosRealisations';
import NousContacter from './pages/NousContacter';
import PostFormulaire from './pages/PostFormulaire';
import NousTrouver from './pages/NousTrouver';

const Routes = () => {
    return (
        <Switch>
            {/* <Route path="/entreprise/histoire" component={NotreHistoire}/> */}
            <Route path="/entreprise" component={Entreprise}/>
            {/* <Route path="/metiers/batiment" component={MetierBatiment} /> */}
            <Route path="/metiers" component={NosMetiers} />
            {/* <Route path="/realisations/batiment" component={RealisationsBatiment} /> */}
            <Route path="/realisations" component={NosRealisations} />  
            <Route path="/contact" component={NousContacter} />
            <Route path="/merci" component={PostFormulaire} />
            <Route path="/localisation" component={NousTrouver} />
            <Route path="/" exact component={Accueil} />
            <Route path="/" component={() => <h1>404</h1>} />
        </Switch>
    )
}

export default Routes