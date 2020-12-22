import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
