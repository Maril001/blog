import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-black mt-5 py-2">
      <div className="container space-x-8 mx-auto flex justify-center items-center">
      <a
          href="https://www.instagram.com/_nyx_fiore_9/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400 mx-2"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com/Maril001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400 mx-2"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://twitter.com/your-twitter-account"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400 mx-2"
        >
          <FaTwitter size={24} />
        </a>
        
        <a
          href="https://linkedin.com/in/your-linkedin-account"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-400 mx-2"
        > <FaLinkedin size={24} />
        </a>
        
      </div>
    </footer>
    
  );
};

export default Footer;
