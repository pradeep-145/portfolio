import React, { useState } from 'react'
import './App.css'
import Home from './components/Introduction'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Education from './components/Education'
function App() {
  const [div1,setDiv1]=useState("text-muted bg-cyan-300 text-cyan-900")
  const [div2,setDiv2]=useState("position-fixed top-0 start-0 w-100 h-100")
  const [div3,setDiv3]=useState("position-absolute top-0 start-0 w-100 h-100")
  const [background,setbackground]=useState('#feb47b')
  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setbackground('#36273f')
      setDiv1('text-light bg-cyan-300 text-cyan-900')
      return 'Dark';
    }
    setbackground('#ff8f5f')
    return 'Light';
  };
  const [theme, setTheme] = useState(getSystemTheme);
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setbackground((prevBack)=>(prevBack==='#feb47b'?'#36273f':'#feb47b'))
  };
  return (
    <>
    <div className="text-muted bg-cyan-300 text-cyan-900">
    <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: -10 }}>
    <div className="position-absolute top-0 start-0 w-100 h-100" style={{
  zIndex: -2,
  
  background: background
}}>
</div>
    </div>
    <div className="container mx-auto p-8">

      <Navbar onThemeChange={handleThemeChange}/>
      <Home />
      <Education />

      </div>
    </div>
    
      
    </>
  )
}

export default App


