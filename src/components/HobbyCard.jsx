
import React from 'react'

const HobbyCard = ({ icon, title, subtitle, shadowColor }) => {
  return (
    <div className={`flex flex-col items-center  bg-white/5 border border-white/10 rounded-lg backdrop-blur-lg p-6 py-10 shadow-md transition transform hover:-translate-y-2 w-xs h-60 ${shadowColor}`}>
      {icon}
      <h4 className='text-xl font-semibold text-center mb-2'>{title}</h4>
      <p className='text-center text-sm'>{subtitle}</p>
    </div>
  )
}

export default HobbyCard
