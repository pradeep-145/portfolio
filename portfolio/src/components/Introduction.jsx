import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
const Home = () => {
  return (
      <div className='container row' id="aboutme">
        <div className="text col-md-7">
          <h3 className='text-center pt-5'>Hello </h3>
        </div>
        <div className="image col-md-5">
            <img src="./image.png" className=" img-fluid rounded"  alt="Responsive image" id='photo'/>
        </div>

      </div>
  )
}

export default Home