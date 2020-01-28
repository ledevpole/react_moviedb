import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail'
import {Route, Switch} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component= {Home}/>
          <Route exact path="/detail/:id" component= {Detail}/> 
        </Switch>
      </div>
    );
  }
}

export default App;
