import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './components/topbar/Topbar'
import Featured from './components/featured/Featured'
import Africa from './components/africa/Africa'

function App() {

  return (
    <div className='app'>
      <Topbar />
      <Featured />
      <hr style={{color: '#ebebeb'}} />
      <Africa />
    </div>
  )
}

export default App
