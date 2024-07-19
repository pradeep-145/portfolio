import React from 'react'
import './home.css'
const Home = () => {
  return (
    <>
      <nav >
        <ul>

        <li>

        <a className='container'>
          <img src="./profile.png" alt="logo"className='logo-container' />
        <span className='name'> Pradeep Sakthi</span> 
        </a>
        </li>
        <li> <a href="">Projects</a></li>
        </ul>
      </nav>
      <div className="aboutme mt-5 row">
        <div className="text col-md-7">
          <p></p>
        </div>
        <div className="image col-md-5">
            <img src="./image.png" className=" img-fluid" style={{"border-radius":"10px"}} alt="Responsive image" />
        </div>

      </div>
      <div className="skills mt-5-row">

      </div>
    </>
  )
}

export default Home