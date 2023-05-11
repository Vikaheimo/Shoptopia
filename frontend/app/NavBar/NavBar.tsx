"use client";

import React from 'react'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import SearchBar from './SearchBar';
import Link from 'next/link';



const NavBar = () => {

  const [nav, setNav] = useState(false)


  //   {links.map(({ id, link }) => (
  //     <li key={id} 
  //     className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'
  //     >
  //         {/* {link} */}
  //         <Link to={link} smooth={500}>{link}</Link>
  //         </li>
  // ))}

  return (
    <div className='flex justify-between items-center w-full h-16 px-4 p-12 text-white fixed bg-black'>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-300 duration-500'>
        {/* <FaBars size={50}/> */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

      </div>

      <ul className='hidden md:flex'>

        <li
          className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'
        >Home


        </li>

        <li
          className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'
        >Products
          <Link href="/login"></Link>


        </li>

        <li
          className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'
        >Shopping cart

        </li>

      </ul>

      <div>
        {/* <SearchBar /> */}
      </div>

      {/* <div>
            <h1 className='text-5xl font-signature ml-2'>Website</h1>
        </div> */}


      {nav && (


        <ul className='flex flex-col justify-start items-center absolute top-0 left-0 h-screen w-48 bg-gradient-to-b from-black to-gray-800 text-gray-300 origin-left duration-500'>


          <li
            className='px-4 cursor-pointer capitalize py6 text-4xl mt-28 hover:scale-105 duration-200'
          > <Link href={"/login"}>Login</Link>
          </li>

          <li
            className='px-4 cursor-pointer capitalize py6 text-4xl mt-8 hover:scale-105 duration-200'
          >
            <Link href={"/register"}>Register</Link>
          </li>
        </ul>

      )}
    </div>
  )
}

export default NavBar

