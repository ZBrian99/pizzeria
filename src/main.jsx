import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.scss'
import { Test } from './Test'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Test /> */}
  </React.StrictMode>,
)
