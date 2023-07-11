import React from 'react'
import { motion } from 'framer-motion'

const FeaturedCard = () => {
    return (
        <div className=' w-full h-[50%] mx-auto '>

           {/* <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full object-cover">
                
    </motion.div>*/}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                // className="w-full h-full object-cover"
                >
                <h1 className='text-2xl :text-5xl text- font-serif text-center font-extradark m-10'>--Musical Feed--</h1>
            </motion.div>
        </div>
    )
}

export default FeaturedCard