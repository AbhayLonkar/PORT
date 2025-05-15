import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileImage from '../assets/images/Profile2.png';
import Skills from '../components/Skills';

const About = () => {
  const [tab, setTab] = useState('intro')
  const location = useLocation();
  const handleLoc = (link) => {
    location.hash = link;
    setTab(link)
  }
  return (
    <div className="min-h-screen text-white flex relative items-center py-10">

      {/* Sidebar - Visible on Desktop */}

      <aside className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-6 flex-col items-start gap-4 p-5 backdrop-blur-md">
        <nav className="flex flex-col gap-6">
          <a onClick={() => handleLoc("intro")} href="#intro" className={`${tab === "intro" ? "border-l-2 text-blue-400" : "text-white"} text-lg  font-semibold  border-white pl-3 hover:text-gray-300 transition-all duration-100`}> Introduction
          </a>
          <a onClick={() => handleLoc("edu")} href="#edu" className={`${tab === "edu" ? "border-l-2 text-blue-400" : "text-white"} text-lg  pl-3 hover:text-gray-300 transition-all duration-100  border-white`}>
            Studies
          </a>
          <a onClick={() => handleLoc("skills")} href="#skills" className={`${tab === "skills" ? "border-l-2 text-blue-400" : "text-white"} text-lg  pl-3 hover:text-gray-300 transition-all duration-100  border-white`}>
            Technical Skills
          </a>
        </nav>
      </aside>


      {/* Profile Section - Fixed on Desktop */}
      <section className="hidden md:flex fixed top-28 left-72 flex-col items-center justify-center space-y-4">
        <img
          src={profileImage}
          alt="Profile"
          className="size-50 rounded-full object-cover border-4 border-white/10"
        />
        <div className="text-sm text-gray-300 flex items-center gap-2">
          🌐 <span>Asia/India</span>
        </div>
        <div className="flex space-3 gap-1">
          <button className="bg-white/10 text-gray-300 px-4 py-1 rounded-full text-sm">English</button>
          <button className="bg-white/10 px-4 py-1 rounded-full text-sm text-gray-300">Hindi</button>
          <button className="bg-white/10 px-4 py-1 rounded-full text-sm text-gray-300">Marathi</button>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-[28rem] px-6 sm:px-10 md:px-20  md:mt-28 overflow-y-auto md:mb-28 mb-8">

        {/* Profile Section - Visible on Mobile */}
        <div className="md:hidden flex flex-col mb-8 justify-center items-center mt-10">
          <img
            src={profileImage}
            alt="Profile"
            className="size-50 rounded-full object-cover border-4 border-white/10"
          />
          <div className="text-sm text-gray-300 flex items-center gap-2 mt-3">
            🌐 <span>Asia/India</span>
          </div>
          <div className="flex space-x-3 mt-4">
            <button className="bg-white/10 text-gray-300 px-4 py-1 rounded-full text-sm">English</button>
            <button className="bg-white/10 px-4 py-1 rounded-full text-sm text-gray-300">Hindi</button>
            <button className="bg-white/10 px-4 py-1 rounded-full text-sm text-gray-300">Marathi</button>
          </div>
        </div>

        {/* Header Section */}
        <header id='intro' className="flex flex-col sm:flex-row justify-between items-center  mb-8">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold ">Abhay <span className='text-blue-400'>Lonkar</span> </h1>
            <h2 className="text-xl sm:text-2xl text-gray-500 mt-2">Web & App Developer</h2>
          </div>

        </header>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mb-10 ">
          <button className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm hover:cursor-pointer">
            <span>🐱</span><span>GitHub</span>
          </button>
          <button className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm hover:cursor-pointer">
            <span>🔗</span><span>LinkedIn</span>
          </button>
          <button className="bg-white/10 px-4 py-2 rounded-full flex items-center space-x-2 text-sm hover:cursor-pointer">
            <span>✉️</span><span>Email</span>
          </button>
        </div>

        {/* Bio Section */}
        <section className="mb-10 flex flex-col sm:items-start sm:text-left items-center text-center justify-center">
          <p className="text-white max-w-3xl text-base sm:text-lg leading-relaxed">
            Aspiring android developer with hands-on internship experience, currently expanding skills in mobile app development using Java, Kotlin and React-Native. Strong foundation in web development with expertise in HTML, CSS, JavaScript, React.js, Vite and TailwindCSS. Passionate about building responsive, user-friendly applications across platforms.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-black border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider"
          >
            <span className="uppercase">Contact me</span>
          </Link>
        </section>







        {/* Second section  */}


        <section id='edu' className='mb-8'>
          <h3 className="text-start text-4xl md:text-5xl font-bold text-blue-400 mb-8">Education</h3>
          <div className=" shadow-md rounded-lg max-w-xl  mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">The Rashtrasant Tukadoji Maharaj Nagpur University</h1>
            <span className="text-lg text-grey-200 font-semibold">Bachelor of Computer Application - BCA</span>

          </div>
          <div className=" shadow-md rounded-lg max-w-xl  my-8">
            <h1 className="text-2xl font-bold text-white mb-2">Hislop College, Nagpur</h1>
            <span className="text-xl text-white font-semibold">Higher Secondary Certificate - HSC</span>
          </div>
          <div className=" shadow-md rounded-lg max-w-xl  my-8">
            <h1 className="text-2xl font-bold text-white mb-2">Blue Diamond Engligh High School, Nagpur</h1>
            <span className="text-xl text-white font-semibold">Secondary School Certificate - SSC</span>
          </div>
        </section>

        {/* Section 3 */}
        <section >
          <div id='skills' className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-5xl mb-5 text-blue-400 font-bold">
              Technical Skills
            </h3>

            <Skills />

          </div>
        </section>

      </main>
    </div >
  );

};

export default About;
