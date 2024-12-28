"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";



const Dashboard = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = ():void => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#20242D] fixed w-full z-10">
        <nav className="flex justify-between items-center md:px-12 px-6 py-4">
          {/* Logo Section */}
          <div className="text-2xl font-bold">
            <h1 className='text-[#E9E6E5]'>MR.</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-xl text-[#E9E6E5]">
            <li className='text-[#02E5F2]'><Link href="#home">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#skill">Skills</Link></li>
            <li><Link href="#project">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white p-2 rounded-md cursor-pointer hover:bg-[#323846]" onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoCloseSharp size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col items-center md:hidden bg-gray-800 text-white font-bold text-lg py-6 space-y-4">
            <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="#skill" onClick={toggleMenu}>Skills</Link></li>
            <li><Link href="#project" onClick={toggleMenu}>Projects</Link></li>
            <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        )}
      </header>


      <section
      className="py-20 px-6 md:px-10 bg-[#20242D] min-h-screen flex items-center justify-center w-full"
      id="home"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl mx-auto space-y-6 md:space-y-0 md:space-x-8">
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[#E9E6E5]">
            <MdWavingHand size={25} />
            <h1 className="text-2xl font-bold">Hello, I&apos;m</h1>
          </div>

          <h1
            className='mt-2 text-3xl md:text-4xl font-bold text-[#02E5F2]'
          >
            Mariam Rauf
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl font-bold text-[#E9E6E5]">
            <span className= 'text-[#02E5F2]'>
              FrontEnd Developer
            </span>
          </h2>

          <p
            className= 'hidden md:block py-4 text-[#9EA2A5] text-base md:text-lg'
          >
          A Frontend Developer proficient in HTML, CSS, and JavaScript, specializing in crafting clean, responsive, and visually engaging interfaces using React and Next.js to deliver an optimal user experience.
          </p>

          <div className="bg-[#02E5F2] w-full md:w-[240px] p-3 mt-4 text-lg rounded-md text-black mx-auto md:mx-0">
            <Link href={"https://github.com/Mariam-Rauf01"} target="_blank">
              <button
                className='flex items-center space-x-4 justify-center md:justify-start text-xl font-bold'
                type="button"
              >
                Github Account
                <FaGithub size={25} className="ml-6" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-auto flex justify-center mb-6 md:mb-0">
          <Image
            src="/mariam.jpeg"
            width={400}
            height={300}
            alt="pic"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>

    <footer className="bg-[#323846] py-4 md:py-6 text-center">
        <h1 className= 'text-white text-lg md:text-2xl'>
          MR. &copy; {new Date().getFullYear()}
        </h1>
      </footer>
    </>
  );
};

export default Dashboard;


