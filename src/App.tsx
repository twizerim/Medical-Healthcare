import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './screen/landingpage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route  path='/' Component={Landingpage}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
