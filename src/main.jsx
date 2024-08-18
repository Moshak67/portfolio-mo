import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Routes, Route

} from "react-router-dom";
import Main from './components/Main.jsx';
import { inject } from '@vercel/analytics';
inject();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App/>
  </React.StrictMode>,
)
