import React from 'react';
import './Global.css'
import { Revolver } from './pages/Revolver'
import { AbbeyRoad } from './pages/AbbeyRoad'
import { YellowSub } from './pages/YellowSub'
import { HomePage } from './pages/HomePage'
import NavBar from './components/elements/navBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Quiz } from './pages/Quiz';


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
      <Route path = '/quiz' component = {Quiz} />
    </Switch>
        </div>
        </Router>
  );
}

export default App;
