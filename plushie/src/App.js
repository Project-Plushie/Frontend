import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Registration}/>
    </div>
  );
}

export default App;
