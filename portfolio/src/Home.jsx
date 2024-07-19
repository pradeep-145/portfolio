import React from 'react'
import './home.css'
const Home = () => {
  return (
    <>
      <nav>
        <ul>

        <li>

        <a><img src="./profile.png" alt="logo" /></a>
        </li>
        <li> <a href="">home</a></li>
        </ul>
      </nav>
      <div className="aboutme mt-5 row">
        <div className="text col-md-7">
          <p></p>
        </div>
      <div className="container col-md-5">
  <img src="./image.png" className="img-fluid" style={{"border-radius":"10px"}} alt="Responsive image" />
</div>

      </div>
    </>
  )
}

export default Home