import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Search from "./components/search";
import Favorites from "./components/favorites";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
          <div className="container">
            <Switch>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/">
                <Search />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
