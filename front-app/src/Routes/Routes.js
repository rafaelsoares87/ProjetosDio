import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';

import GOT from '../Pages/GOT';
import StarTrek from '../Pages/StarTrek';
import StarWars from '../Pages/StarWas';
import MultiversoDC from '../Pages/MultiversoDC';
import MultiversoMarvel from '../Pages/MultiversoMarvel';
import GuiaDoMochileirodasgalaxias from '../Pages/GuiaDoMochileiro';
import HarryPotter from '../Pages/Harry-potter';
import Tolkien from '../Pages/Universo-Tolkien';


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
     

      
      <Route  path='/Game-of-thrones' component={GOT}></Route>
      <Route  path='/Universo-Star-Trek' component={StarTrek}></Route>
      <Route  path='/universo-Star-Wars' component={StarWars}></Route>
      <Route  path='/multiversoDc' component={MultiversoDC}></Route>
      <Route  path='/multiversomarvel' component={MultiversoMarvel}></Route>
      <Route  path='/Omochileiro-das-galaxias' component={GuiaDoMochileirodasgalaxias}></Route>
      <Route  path='/Universo-Tolkien' component={Tolkien}></Route>
      <Route  path='/HarryPotter' component={HarryPotter}></Route>
    </Switch>
  );
}

export default Routes;