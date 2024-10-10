import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element = {<App />} />
    <Route path='/sign-in' element = {<Signin />} />
    <Route path='/sign-up' element = {<Signup />} />
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
