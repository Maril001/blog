import React from 'react'

const NavBar = () => {
  return (
    <div className=' h-34'>
        <div className='h-[100%] p-2 container mx-auto flex justify-center items-center"'>
            {/*<img src='https://png.pngtree.com/png-vector/20190904/ourmid/pngtree-piano-instrument-musical-logo-designs-inspiration-isolated-on-png-image_1722665.jpg' alt='logo' 
            className='w-[20%] h-[100%] mt-[-4%]'/>*/}
            <h1 className='font-serif text-center bg-[rgb(0,3,19)] text-yellow-200 font-extradark flex text-5xl pt-6'>Music Blog..</h1>
        </div>
        <div className=' text-black center'>
        <div className=' space-x-8 font-bold font-serif flex justify-center pt-[1%] mt-35 md:text-sm text-white text-2xl md:space-x-10'> {/**link container */}
         <a href='/'><h1 className='cursor-pointer hover:text-red-500 bg-[rgb(0,3,19)]'> Home </h1></a>
         <a href ='/cat'><h1 className='cursor-pointer hover:text-red-500 bg-[rgb(0,3,19)]'> Categories </h1></a>
          <a href='/admin'><h1 className='cursor-pointer hover:text-red-500 bg-[rgb(0,3,19)]'> Add POST </h1></a>
        </div>
    </div>
        <div className='relative group w-[20%] h-[100%] '>
          <button className=' hover:text-white'>
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