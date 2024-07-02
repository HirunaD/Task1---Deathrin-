import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/Navbar'
import Navbarnew from './components/Navbarnew'
import FirstPage from './components/FirstPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='navbarnew'>
        <Navbarnew />
      </div>
      <div>
        <FirstPage />
      </div>
    </>
  )
}

export default App
