import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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
            <li><Link to="/janvi">Janvi</Link></li>
            <li><Link to="/">Deep</Link></li> 
            <li><Link to="/">Bansi</Link></li> 
            <li><Link to="/">Tejaswi</Link></li> 
            <li><Link to="/">Sanket</Link></li> 
          </ul>
            <About />
          </Route>
          <Route path="/janvi">
            <h1> Hello This is janvi </h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Janvi">

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

function About() {
  return <h2>About</h2>;
}