import React from 'react'
import "./About.css"
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { FaSnapchatSquare, FaPinterestSquare, FaTiktok, FaTwitterSquare } from "react-icons/fa"
import { BsYoutube } from "react-icons/bs"

import { MdOutlineEmail } from "react-icons/md"
import { GiRotaryPhone } from "react-icons/gi"

import logo from "../../assets/unculture.png"

// interface handleClickProps {
//   innerText: string
// }

const About = () => {

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    // console.dir(target.innerText)
    alert(`You will be redirected to ${target.innerText} page.`)
  }

  return (
    <>
      <div className='about_container'>
        <div className="about_left">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque
            felis imperdiet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque
            felis imperdiet.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque
            felis imperdiet.</p>
          <h4>UnculturE</h4>
        </div>
        <div className="about_right">
            <img src={logo} alt="Unculture_Logo" />
        </div>
      </div>



      <div className="about_footer">
        <div className="about_policies">
          <h1>Policies</h1>
          <div onClick={(e: any) => handleClick(e)}>Terms of Services</div>
          <div onClick={(e: any) => handleClick(e)}>Privace</div>
          <div onClick={(e: any) => handleClick(e)}>Refund</div>
          <div onClick={(e: any) => handleClick(e)}>Shipping</div>
          <div onClick={(e: any) => handleClick(e)}>Tracks Your Goods</div>
        </div>
        <div className="about_contact">
          <h1>Contact Us</h1>
          <div><MdOutlineEmail className='about_icon' />: uncultureshop@unculture.com</div>
          <div><GiRotaryPhone className='about_icon' />: (xxx)-xx-xxxxxxx</div>
        </div>
        <div className="about_social">
          <h1>Social Media</h1>
          <div className='about_icons'>
            <div><AiFillFacebook /></div>
            <div><AiFillInstagram /></div>
            <div><FaSnapchatSquare /></div>
            <div><FaPinterestSquare /></div>
            <div><FaTiktok /></div>
            <div><FaTwitterSquare /></div>
            <div><BsYoutube /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
