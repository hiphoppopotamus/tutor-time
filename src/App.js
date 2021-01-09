import React, { Component } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}
          <Route exact path="/" component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
