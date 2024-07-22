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
      setbackground('#601d87')
      setDiv1('text-light bg-cyan-300 text-cyan-900')
      return 'Dark';
    }
    setDiv1('text-muted bg-cyan-300 text-cyan-900')
    setbackground('#ff8f5f')
    return 'Light';
  };
  const [theme, setTheme] = useState(getSystemTheme);
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setbackground((prevBack)=>(prevBack==='#feb47b'?'#601d87':'#feb47b'))
    setDiv1((prevDiv)=>(prevDiv==='text-muted bg-cyan-300 text-cyan-900'?'text-light bg-cyan-300 text-cyan-900':'text-muted bg-cyan-300 text-cyan-900'))

  };
  return (
    <>
    <div className={div1}>
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


