import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FirstComponent from './FirstComponents'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FirstComponent />
    <App />
  </React.StrictMode>,
)
