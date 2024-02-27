import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* Wrap your App component with BrowserRouter */}
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode>, */}
  </BrowserRouter>
)
