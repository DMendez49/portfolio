import React , {Fragment, NoMatch} from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Container, } from "semantic-ui-react";
import Home from './components/Home';
import About from './components/About';
import Conection from './components/Conection';
import Project from './components/Projects';
import Navbar from "./components/Navbar";
import Dell from "./components/Dell";
import Instructure from "./components/Instructure";
import Sykes from "./components/Sykes";
import Express from "./components/Express"

const App = () => (
    <Fragment>
      <Navbar />
        <Switch>
          <center>
            <Route exact path= "/" component={Home}/>
            <Route exact path= "/about" component={About}/>
            <Route exact path="/connection" component={Conection}/>
            <Route exact path="/project" component={Project}/>
            <Route exact path="/DellTechnologies" component={Dell}/>
            <Route exact path="/Instructure" component={Instructure}/>
            <Route exact path="/Sykes" component={Sykes}/>
            <Route exact path="/Express" component={Express}/>
            <Route component = {NoMatch}/>
          </center>
        </Switch>
    </Fragment>
 );

export default App;
