import React from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/router'
import { RouterProvider } from 'react-router-dom'
import 'antd/dist/reset.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
