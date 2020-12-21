import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
            /* <Navbar /> */

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
