import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import NosMetiers from './pages/NosMetiers' ;
import NosRealisations from './pages/NosRealisations';
import NousContacter from './pages/NousContacter';
import PostFormulaire from './pages/PostFormulaire';
import NousTrouver from './pages/NousTrouver';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/metiers" component={NosMetiers} />
      <Route path="/realisations" component={NosRealisations} />  
      <Route path="/contact" component={NousContacter} />
      <Route path="/merci" component={PostFormulaire} />
      <Route path="/localisation" component={NousTrouver} />
    </Router>
  );
}

export default App;