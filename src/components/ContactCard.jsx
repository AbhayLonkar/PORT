import React from 'react'

const ContactCard = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      {icon}
      <p className='uppercase text-sm font-bold text-cyan-400'>{title}</p>
      <p className='text-sm font-semibold px-1 text-wrap '>{description}</p>
    </div>
  )
}

export default ContactCard
