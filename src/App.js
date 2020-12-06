import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Login />
          <Switch>
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
