import React from 'react';
import Home from './components/Home'
import Schedule from './components/Schedule'
import Locations from './components/Locations'
import Auth from './components/Auth';

const routes = {
    "/":() => <Auth />,
    "/home":() => <Home />,
    "/schedule":() => <Schedule />,
    "/locations":() => <Locations />
  };

export default routes;