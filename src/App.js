import React , {Fragment, NoMatch} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Home from './components/Home';
import About from './components/About';
import Conection from './components/Conection';
import Project from './components/Projects';
import Navbar from "./components/Navbar";
import DellTechnologies from "./components/DellTechnologies";
import Instructure from "./components/Instructure";
import Sykes from "./components/Sykes";
import Express from "./components/Express";
import Alorica from "./components/Alorica";
import Resume from "./components/Resume";


const App = () => (
    <Fragment>
        <Navbar />
          <Switch>
            <center>
              <Route exact path= "/" component={Home}/>
              <Route exact path="/Sykes" component={Sykes}/>
              <Route exact path= "/about" component={About}/>
              <Route exact path="/Resume" component={Resume}/>
              <Route exact path="/Express" component={Express}/>
              <Route exact path="/Alorica" component={Alorica}/>
              <Route exact path="/project" component={Project}/>
              <Route exact path="/connection" component={Conection}/>
              <Route exact path="/Instructure" component={Instructure}/>
              <Route exact path="/DellTechnologies" component={DellTechnologies}/>
              <Route component = {NoMatch}/>
            </center>
          </Switch>
    </Fragment>
 );

export default App;
