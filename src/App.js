import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About'
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main_frame">
        <Router className="content_containaer">
          <NavBar />
          <Switch>
            <Route path='/' exact component={About}/>
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
