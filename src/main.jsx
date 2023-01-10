import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DataProvider } from './Context/DataContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
  </DataProvider>,
)
