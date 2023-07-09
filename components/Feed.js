import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'

export default function Feed() {

    const [blogPosts, setBlogPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubCategories] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('/api/getPost');
                const data = await response.json();
                if (response.ok) {
                    setBlogPosts(data.data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogPosts();
    }, []);

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

    return (

        <><div className="grid gap-16 mx-4 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

            {blogPosts.map((post) => (
                <motion.div

                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black shadow-lg h-fit rounded-lg overflow-hidden"
                >
                    <img
                        src={post.Image}
                        alt="Blog Post"
                        className="w-full h-40 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl  text-gray-600 font-serif font-bold mb-4">{post.title}</h2>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                            <AiOutlineCalendar className="mr-2" />
                            {post.date}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                            <FiUser className="mr-2" />
                            {post.author}
                        </div>
                        <p className="text-gray-700 mt-4"></p>
                        <button className="bg-[#FF6701] text-white px-4 py-2 rounded-md mt-4">
                            Read More
                        </button>
                    </div>
                </motion.div>))}
        </div>
        <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                // className="w-full h-full object-cover"
                >
                <h1 className='text-5xl font-serif text-center font-extradark m-10'>--Category--</h1>
            </motion.div>
        <div className=" mt-10 grid gap-10 mx-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {categories.map((nice) => (
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-orange-600 shadow-lg h-[100%] w-[80%] rounded-full overflow-hidden"
                    >
                        <img
                            src={nice.categoryImage}
                            alt="Blog Post"
                            className="w-full h-80% object-cover" />
                        <div className="p-3">
                            <h2 className="text-sm font-bold font-mono mb-2 text-center text-black">{nice.categoryName}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                // className="w-full h-full object-cover"
                >
                <h1 className='text-5xl font-serif text-center font-extradark m-10'>-- Sub Category--</h1>
            </motion.div>
        <div className=" mt-10 grid gap-10 mx-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
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
            </div>
            </> )}