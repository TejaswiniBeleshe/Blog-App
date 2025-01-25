import { SnackbarProvider } from 'notistack'

import './App.css'

import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {
  
  return (
    <SnackbarProvider>
    <main>
      <Header/>
      <Outlet/>
    </main>
    </SnackbarProvider>
  )
}

export default App
