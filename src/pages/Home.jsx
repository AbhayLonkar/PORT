import React from 'react'
import profileImage from '../assets/images/Profile.png'
import DownloadResume from '../components/DownloadResume'

const Home = () => {
  return (
    <div className='text-white'>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-12 gap-10 md:gap-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hello<br /> I'm Abhay Lonkar
          </h1>

          <p className="text-base md:text-xl text-white/60 max-w-2xl mb-8">
            Ambitious Computer Science student passionate about solving real-world challenges through innovative tech solutions.
          </p>
          <div className="inline-flex items-center gap-2 border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider" >
            <DownloadResume />
          </div>
        </div>
        <img
          src={profileImage}
          alt="Abnay's Avatar"
          className="w-48 h-48 md:w-64 md:h-64 mt-20 md:mt-0 object-cover rounded-full shadow-xl shadow-blue-500/20"
        />
      </div>
    </div>
  )
}

export default Home
