import React from 'react'
import { BrainCircuit, Clapperboard } from 'lucide-react'
import { Link } from 'react-router-dom'
import profileImage from '../assets/images/Profile.png'
import DownloadResume from '../components/DownloadResume'
import GithubContributionGraph from '../components/GithubContributionGraph'
import HobbyCard from '../components/HobbyCard'

const Home = () => {
  const hobbies = [
    {
      icon: <BrainCircuit size={40} className='text-emerald-300 mb-3' />,
      title: 'Eat. Sleep. ___ . Repeat',
      subtitle: 'When I am not studying you can usually find me watching movies or listening to music! And I hate sitting idle.',
      shadowColor: 'hover:shadow-emerald-400/30'
    },
    {
      icon: < Clapperboard size={40} className='text-blue-300 mb-3' />,
      title: 'Love Horror Movies',
      subtitle: 'I enjoy watching horror movies late at night—nothing beats a good scare!',
      shadowColor: 'hover:shadow-blue-400/30'
    }
  ]
  return (
    <div className='text-white'>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-12 gap-10 md:gap-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hello<br /> I'm <span className='text-blue-400'>Abhay Lonkar</span>
          </h1>

          <p className="text-base md:text-xl text-white/60 max-w-2xl mb-8">
            Aspiring Android developer with internship experience, proficient in Java, Kotlin, and React Native, with a strong foundation in web development and a passion for building responsive, user-friendly apps.
          </p>
          <div className="rounded-lg inline-flex items-center gap-2 border border-white/30 hover:border-blue-400 hover:cursor-pointer transition px-6 py-3 text-white font-bold uppercase tracking-wider" >
            <DownloadResume />
          </div>
        </div>
        <img
          src={profileImage}
          alt="Abnay's Avatar"
          className="size-64 mt-20 md:mt-0 object-cover rounded-full shadow-xl shadow-blue-500/20"
        />
      </div>
      <div className='px-4 py-10'>
        <h1 className='text-center text-3xl md:text-4xl font-bold text-cyan-400 uppercase'>My coding Statistics</h1>
        <div className='flex justify-center items-center mt-6'>
          <a href=""
            className='uppercase w-8/12 md:w-auto text-center inline-flex items-center justify-center gap-2 border  border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold tracking-wider'
          >
            Github Profile
          </a>
        </div>
        <div className=' flex justify-center items-center mt-6'>
          <GithubContributionGraph />
        </div>
      </div>

      <div className='px-4 pt-10'>
        <div className='max-w-6xl mx-auto'>
          <h3 className="text-3xl md:text-5xl font-semibold mb-12 text-white text-center">INTERESTS &amp; <span className="text-blue-400">HOBBIES</span></h3>
          <div className='flex  gap-5 items-center justify-center flex-wrap'>
            {hobbies.map((item, index) => <HobbyCard key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} shadowColor={item.shadowColor} />)}
          </div>
        </div>
      </div>

      <div className="flex justify-center py-7 mt-3">
        <Link to="/contact" className="inline-flex items-center gap-2 bg-black border border-white/30 hover:border-blue-400 transition px-6 py-3 text-white font-bold uppercase tracking-wider">
          <span className="uppercase">Contact me</span>
        </Link>
      </div>

    </div>
  )
}

export default Home
