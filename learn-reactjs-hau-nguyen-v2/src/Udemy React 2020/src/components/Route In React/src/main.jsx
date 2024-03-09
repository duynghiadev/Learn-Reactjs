import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import store from './app/store.js'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      {/*<React.StrictMode>*/}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/*</React.StrictMode>*/}
    </Provider>
  )
