import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Normalize } from '@styled/modern-normalize'
import './index.css'
import App from './components/App/App'



createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
  <React.Fragment>
    <Normalize />
    <App />
  </React.Fragment>
  </StrictMode>,
)
