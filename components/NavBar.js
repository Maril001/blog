import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full h-[15%] bg-white shadow-'>
        <div className='w-full h-[100%] p-2 flex justify-evenly'>
            <img src='https://png.pngtree.com/png-vector/20190904/ourmid/pngtree-piano-instrument-musical-logo-designs-inspiration-isolated-on-png-image_1722665.jpg' alt='logo' className='object-cover w-[14%] h-[100%]'/>
            <h1 className='font-serif text-center font-extradark text-5xl pt-6'>Music Blog..</h1>
        </div>
        <div className='relative group w-[20%] h-screen '>
          <button className=' hover:text-black'>
            ...
          </button>
          <div className='absolute hidden rounded group-hover:block origin-top top-8 text-black'>
            <ul className='bg-white w-[100%] lg:p-4 '>
              <li className='hover:text-teal-800 lg:text-sm mt-[3%]  cursor-pointer flex'>About us</li>
              <li className='hover:text-teal-800 lg:text-sm mt-[15%] cursor-pointer flex '>Webinar</li>
              <li className='hover:text-teal-800 lg:text-sm mt-[15%] cursor-pointer flex '>Know Our Story</li>
              <li className='hover:text-teal-800 lg:text-sm mt-[15%] cursor-pointer flex '>Newsletter</li>
              <li className='hover:text-teal-800 lg:text-sm mt-[15%] cursor-pointer flex '>Contact Us</li>
              <li className='hover:text-teal-800 lg:text-sm mt-[15%] cursor-pointer flex '>Privacy Policy</li>

            </ul>
          </div>
        </div>
    </div>
  )
}

export default NavBar