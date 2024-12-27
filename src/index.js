import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from "react-router-dom";  // Use HashRouter

import CtrFormater from './components/ctrFormater';
import Inputform from './components/inputform';
import Header from './components/header';

// Define routes inside HashRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Inputform />} />
         <Route path="/ctrFormatter" element={<CtrFormater />} /> 
      </Routes>
    </Router> 
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
