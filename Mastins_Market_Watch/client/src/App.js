import React from 'react';
// import './styles/App.css';
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
          <Route exact path="/" component={Validator} />
          <Route exact path="/home" component={Home} />
          <Route path="/markets" component={Markets} />
        </Switch>
      </main>
    </div>
  );
}
