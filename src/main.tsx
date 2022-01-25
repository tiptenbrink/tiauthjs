import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthRedirect from "./AuthRedirect";
import AuthCallback from "./AuthCallback";
import {AuthProvider} from "./AuthContext";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)
