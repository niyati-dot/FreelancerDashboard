import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'

export default function App() {
  return (
    <div>
    <Router>
      <div>
        <ul id="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Authors
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <ul>
              <li><Link to="/">Vishal</Link></li>
              <li><Link to="/">Janvi</Link></li>
              <li><Link to="/">Deep</Link></li> 
              <li><Link to="/bansi">Bansi</Link></li> 
              <li><Link to="/">Tejaswi</Link></li> 
              <li><Link to="/">Sanket</Link></li> 
            </ul>
          </Route>
          <Route path="/bansi">
            <h2>Hello!! This is Bansi!!</h2>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}
