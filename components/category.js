import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cat(){

const [categories, setCategories] = useState([]);

useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/getCategory');
            const data = await response.json();
            if (response.ok) {
                setCategories(data.data);
            } else {
                console.error('Failed to fetch categories');
            }
        } catch (error) {
            console.error(error);
        }
    };

    fetchCategories();
}, []);

return(

        <><motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
>
    <h1 className='text-5xl font-serif text-center font-extradark m-10'>--Category--</h1>
</motion.div><div className=" mt-10 grid gap-10 mx-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((nice) => (
            <motion.div

                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-orange-600 shadow-lg h-[100%] w-[80%] rounded-full overflow-hidden"
            >
                <a href ='/scat'><img
                    src={nice.categoryImage}
                    alt="Blog Post"
                    className="w-full h-80% className='cursor-pointer object-cover" /> </a>
                <div className="p-3">
                    <h2 className="text-sm font-bold font-mono mb-2 text-center text-black">{nice.categoryName}</h2>
                   
                </div>
            </motion.div>
        ))}
    </div></>

)}

