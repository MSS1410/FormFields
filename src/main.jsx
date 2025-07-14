import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/App'
import '../src/Form.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
)
