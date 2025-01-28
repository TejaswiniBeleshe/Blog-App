import { SnackbarProvider } from 'notistack'

import './App.css'

import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { createContext, useState } from 'react'

export const context = createContext()
function App() {
  const [userInfo,setUserInfo] = useState();
  
  
  return (
    <SnackbarProvider>
    <context.Provider value={{userInfo,setUserInfo}}>
    <main>
      <Header/>
      <Outlet/>
    </main>
    </context.Provider>
    </SnackbarProvider>
  )
}

export default App
