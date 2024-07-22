import React, { useEffect, useState } from 'react';
import { IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

const Navbar = ({onThemeChange}) => {
  const [background,setBackground]=useState('#ff8f5f')
  
    const getSystemTheme = () => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setBackground('#36273f')
        return 'Dark';
      }
      setBackground('#ff8f5f')
      return 'Light';
    };
  const navclass = "shadow-sm overflow-hidden rounded";
  const [theme, setTheme] = useState(getSystemTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {if(prevTheme==='Light'){
      setBackground('#36273f')
      return 'Dark'
    }
    else {
      setBackground('#ff8f5f')
      
      return 'Light'
    }});
    onThemeChange(theme);
    
  };

  return (
    <nav className={navclass} style={{ background: background , height: "50px" }}>
      <ul>
        <li>
          <a className='text-container' style={{ padding: "6px " }}>
            <img src="./profile.png" alt="logo" className='logo-container' />
            <span className='name text'> Pradeep Sakthi</span>
          </a>
        </li>
        <li>
          <button className='btn text-light' onClick={toggleTheme} style={{ padding: "13px" }}>
            {theme}
          </button>
        </li>
        <li>
          <a href="" className='align-bottom text'>Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
