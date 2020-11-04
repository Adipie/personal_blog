import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About'
import './App.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="main_frame">
        <Router className="content_containaer">
          <NavBar />
          <Switch>
            <Route path='/' exact component={About}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
