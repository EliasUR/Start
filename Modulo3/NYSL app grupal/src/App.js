import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import './App.scss';
import Auth from './components/Auth'

function App() {
  return (
    <div className="App">
      <Auth ></Auth>
    </div>
  );
}

export default App;