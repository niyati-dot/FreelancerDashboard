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
    <div style = {{ marginLeft : 30 }}>
      <Router>
        <div>
          <ul id="menu" style = {{ marginLeft : -60 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/bansi">
              <h2>Hello!! This is Bansi!!</h2>
            </Route>
            <Route path="/deep">
              <Deep />
            </Route>
            <Route path="/janvi">
              <h1> Hello This is janvi </h1>
            </Route>
            <Route exact path="/">
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

function About() {
  return <div>
    <h2>About</h2>
    <p>We are group 5!</p>
    <h4>Team</h4>
    <ul>
    <li><Link to="/bansi">Bansi</Link></li> 
      <li><Link to="/deep">Deep</Link></li> 
      <li><Link to="/janvi">Janvi</Link></li>
      <li><Link to="/">Sanket</Link></li> 
      <li><Link to="/">Tejaswi</Link></li> 
      <li><Link to="/">Vishal</Link></li> 
    </ul>
  </div>
  return 
}

function Deep(){
  return <div>
          <h2>Hey! This is me!</h2>
          <p>Look my name on the URL!!</p>
         </div>
}