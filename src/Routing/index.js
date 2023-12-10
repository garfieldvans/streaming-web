// App.js or index.js
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routing';
import Navbar from '../components/navmenu/Navbar';


ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
