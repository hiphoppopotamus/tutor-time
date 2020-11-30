import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
