import React from 'react';
import './style/App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Validator from './components/Validator';
import Markets from './components/Markets';

export default function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newprofile" component={Validator} />
          <Route exact path="/markets" component={Markets} />
        </Switch>
      </main>
    </div>
  );
}
