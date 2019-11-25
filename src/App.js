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
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li class="nav-item">
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
