import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './homepage';
import Didattica from './didattica'

const Webpages = () => {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path='/didattica' component={Didattica}/>
        </Router>    
    )
}

export default Webpages;
