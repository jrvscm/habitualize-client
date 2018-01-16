import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import UserDashboard from './components/UserDashboard';
import HabitStats from './components/HabitStats';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="pages-container">
          <main>
            <Switch>
              <Redirect exact path from="/" to="/home" />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={LoginPage} /> 
              <Route exact path="/dashboard" component={UserDashboard} />
              <Route exact path="/stats" component={HabitStats} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;