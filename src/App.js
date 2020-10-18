import React from 'react';
import PageHeader from './components/page_header'
import About from './pages/about'
import './App.css';

function App() {
  return (
    <div className="main_frame">
      <div className="container">
        <PageHeader />
      </div>
      <div className="content_containaer">
        <About />
      </div>
    </div>
  );
}

export default App;
