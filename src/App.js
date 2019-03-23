import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <h1>ServicesRus</h1>
          <Router>
            <div>
              <Link to="/admin">Admin</Link>
              <Route
                  path="/admin"
                  exact
                  component={Admin}/>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
