import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/Styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
