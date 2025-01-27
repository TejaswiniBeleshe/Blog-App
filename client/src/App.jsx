import { SnackbarProvider } from 'notistack'

import './App.css'

import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { createContext, useState } from 'react'

export const context = createContext()
function App() {
  const [reload,setReload] = useState();
  
  
  return (
    <SnackbarProvider>
    <context.Provider value={{reload,setReload}}>
    <main>
      <Header/>
      <Outlet/>
    </main>
    </context.Provider>
    </SnackbarProvider>
  )
}

export default App
