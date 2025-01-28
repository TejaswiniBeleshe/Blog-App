import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import LoginPage from './components/LoginPage.jsx'
import RegisterPage from './components/RegisterPage.jsx'
import UserPage from './components/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App/>}>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/userpage" element={<UserPage/>}/>
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
     <App/>
    </RouterProvider>
  </StrictMode>,
)
