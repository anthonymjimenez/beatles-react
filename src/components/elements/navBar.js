import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
export const navBar = () => {
    return (
        <div>
            om "react-router-dom";

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/revolver">Revovler</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <li>
              <Link to="/users">Users</Link>
            </li>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
        </div>
    )
}
