import {useState } from 'react'

import './App.css'

import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {
  

  return (
    <main>
      <Header/>
      <Outlet/>
    </main>
  )
}

export default App
