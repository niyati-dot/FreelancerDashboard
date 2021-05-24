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

            <Route path="/Tejaswi">
              <Tejaswi />
            </Route>

            <Route path="/bansi">
              <Bansi />
            </Route>
            
            <Route path="/janvi">
              <Janvi />
            </Route>
            
            <Route path="/deep">
              <Deep />
            </Route>

            <Route path="/vishal">
              <Vishal />
            </Route>

            <Route path="/sanket">
              <Sanket />
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
      <li><Link to="/sanket">Sanket</Link></li> 
      <li><Link to="/Tejaswi">Tejaswi</Link></li> 
      <li><Link to="/vishal">Vishal</Link></li> 
    </ul>
  </div>
  return 
}

function Bansi() {
  return <div>
      <h2>Hello!! This is Bansi!!</h2>
  </div>
}
function Deep(){
  return <div>
          <h2>Hey! This is me!</h2>
          <p>Look up my name on the URL!!</p>
         </div>
}
function Tejaswi() {
  return <h2>Hello. I am Tejaswi Chaudhary.</h2>;
}

function Janvi(){
  return <div>
          <h2>Hi! This is Janvi!</h2>
         </div>
}

function Vishal(){
  return <div>
          <h2>Hello 👋 Greetings Vishal Sancheti!</h2>
         </div>
}

function Sanket(){
  return <div>
          <h2>Hi, Sanket here! Hope you doing well! :)</h2>
         </div>
}