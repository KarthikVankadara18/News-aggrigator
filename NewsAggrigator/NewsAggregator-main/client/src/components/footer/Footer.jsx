import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <h3>Karthik Vankadara</h3>
          <div className='social'>
           <a href="https://www.instagram.com/karthik_vankadara/"> <RiInstagramFill className='icon' /></a>
           <a href="https://www.instagram.com/27_varshu_04/"> <AiFillTwitterCircle className='icon' /></a>
           <a href="https://www.linkedin.com/in/karthik-vankadara-69997a229/"> <AiFillLinkedin className='icon' /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
