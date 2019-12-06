import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Switch>
          <Route exact path='/' component= {Home}></Route>
          <Route path='/beers' component= {Beers}></Route>
          <Route path='/new' component= {New}></Route>
          <Route path='/random' component= {Random}></Route>
        </Switch>
       
      </div>
    );
  }
}

export default App;
