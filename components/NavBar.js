import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full h-[15%] bg-white shadow-'>
        <div className='w-full h-[100%] p-2 flex justify-evenly'>
            <img src='https://png.pngtree.com/png-vector/20190904/ourmid/pngtree-piano-instrument-musical-logo-designs-inspiration-isolated-on-png-image_1722665.jpg' alt='logo' className='object-cover w-[14%] h-[100%]'/>
            <h1 className='font-serif text-center font-extradark text-5xl pt-6'>Music Blog..</h1>
        </div>
    </div>
  )
}

export default NavBar