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
            <li><Link to="/">Janvi</Link></li>
            <li><Link to="/">Deep</Link></li> 
            <li><Link to="/">Bansi</Link></li> 
            <li><Link to="/Tejaswi">Tejaswi</Link></li>
            <li><Link to="/">Sanket</Link></li> 
          </ul>
            <About />
          </Route>
          <Route path="/Tejaswi">
                <Tejaswi />
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

function Tejaswi() {
  return <h2>Hello. I am Tejaswi Chaudhary.</h2>;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

