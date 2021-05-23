import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import Login from '../pages/Login';
import Home from '../pages/Home';
import './App.css';


class App extends Component {

  render() { 
    return (
      <div className="App">
        <React.StrictMode>
          <Router>
            <Switch>
              <ProtectedRoute component={Home} exact path="/" />
              <Route component={Login} path="/login" />
            </Switch>
          </Router>
        </React.StrictMode>
      </div>
    )
  };
}

export default App;
