import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Scat(){

const [subcategories, setSubCategories] = useState([]);

useEffect(() => {
    const fetchSubCategories = async () => {
        try {
            const response = await fetch('/api/getSubCategory');
            const data = await response.json();
            if (response.ok) {
                setSubCategories(data.data);
            } else {
                console.error('Failed to fetch sub categories');
            }
        } catch (error) {
            console.error(error);
        }
    };

    fetchSubCategories();
}, []);

return(
    <><motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    // className="w-full h-full object-cover"
    >
    <h1 className='text-5xl font-serif text-center font-extradark m-10'>-- Sub Category--</h1>
</motion.div>
<div className=" mt-10 text-center grid gap-10 mx-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
    {subcategories.map((nice) => (
        <motion.div

            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-orange-600 shadow-lg h-[100%] w-[80%] rounded-full overflow-hidden"
        >
            <img
                src={nice.subCategoryImage}
                alt="Blog Post"
                className="w-full h-80% object-cover" />
            <div className="p-3">
                <h2 className="text-sm font-bold font-mono mb-2 text-center text-black">{nice.subCategoryName}</h2>
            </div>
        </motion.div>
    ))}
</div></>
            
)}