import React from 'react';
import './Global.css'
import { Revolver } from './pages/Revolver'
import { AbbeyRoad } from './pages/AbbeyRoad'
import { YellowSub } from './pages/YellowSub'
import { HomePage } from './pages/HomePage'
import NavBar from './components/elements/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <NavBar></NavBar>

    <Switch>
      <Route exact path = '/' component = {HomePage} /> 
      <Route path = '/abbeyroad' component = {AbbeyRoad} />
      <Route path = '/yellowsub' component = {YellowSub} />
      <Route path = '/revolver' component = {Revolver} />
    </Switch>
        </div>
        </Router>
  );
}

export default App;
