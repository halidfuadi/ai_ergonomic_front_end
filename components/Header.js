import React from 'react'
import Image from "next/legacy/image"
import Logo from '../public/LOGO.png'
const Header = () => {
  return (
    <nav className='px-2 bg-red-700 py-2'>
    <div  className='flex items-center'>
    <Image className='px-4 float-left' src={Logo} width="70px" height="30px" layout='fixed'/>
      <a className='text-white text-xl font-bold px-2' href='/'>
        <span>PT TOYOTA MOTOR MANUFACTURING INDONESIA - AI ERGONOMIC ANALYSIS</span>
      </a>
    </div>
  </nav>
  )
}

export default Header
