import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './screen/landingpage';
import Service from './screen/service';
import Contactus from './screen/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
            <Route  path='/' Component={Landingpage}/>
            <Route  path='/service' Component={Service}/>
            <Route  path='/contact' Component={Contactus}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
