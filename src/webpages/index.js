import React from 'react';

import {
  BrowserRouter as Router,
  Route,
//   Switch,
//   Link
} from "react-router-dom";

import Home from './homepage';
import Didattica from './didattica';
import Accedi from './accedi';
import Contatti from './contatti';
import Privacy from './privacy-policy';

const Webpages = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path='/didattica' component={Didattica}/>
            <Route path='/contatti' component={Contatti}/>
            <Route path='/accedi' component={Accedi}/>
            <Route path='/privacy' component={Privacy}/> 
        </Router>    
    )
}

export default Webpages;
