import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/Navbar'
import Navbarnew from './components/Navbarnew'
import FirstPage from './pages/FirstPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <div >
        <Navbarnew />
        <FirstPage />
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App
