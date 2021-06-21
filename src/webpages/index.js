import React from 'react';

import {
  BrowserRouter as Router,
  Route,
//   Switch,
//   Link
} from "react-router-dom";

import Home from './homepage';
import Didattica from './didattica'

const Webpages = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path='/didattica' component={Didattica}/>
            <Route path='/contatti' component={Didattica}/>
            <Route path='/accedi' component={Didattica}/>
            <Route path='/privacy' component={Didattica}/> 
        </Router>    
    )
}

export default Webpages;
