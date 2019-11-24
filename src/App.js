import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Search from "./components/search";
import Favorites from "./components/favorites";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
