import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './css/App.css';
import {ProgressBar} from 'react-materialize'
import HomePage from './pages/home'
import SinglePage from './pages/single'

class App extends Component {

  constructor(){
    super()
    this.state = {
      routes: null
    }
  }

  render() {
    return (
      <Router>
        <div className="App">

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/:id">Single</Link></li>
         </ul>


          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={SinglePage} />
        </div>
      </Router>
    );
  }
}

export default App;
