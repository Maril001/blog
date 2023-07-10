import React from 'react'
import { motion } from 'framer-motion'

const FeaturedCard = () => {
    return (
        <div className='bg-gray-100 w-full h-[50%] mx-auto '>

            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full object-cover">
                <img src='https://38.media.tumblr.com/5faafc026fcaa52eb621a6da636e4c80/tumblr_nic0wuHZKZ1tc8rbno1_1280.gif' alt='background-img' className=' mt-[2%] h-[70%] w-[100%]' />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                // className="w-full h-full object-cover"
                >
                <h1 className='text-2xl md:text-5xl font-serif text-center font-extradark mt-[-5%] m-10'>--Musical Feed--</h1>
            </motion.div>
        </div>
    )
}

export default FeaturedCard