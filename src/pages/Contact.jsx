import React from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

import ContactCard from '../components/ContactCard'

const Contact = () => {

  const contactCards = [
    {
      icon: <MapPin size={42} />,
      title: "fint me @",
      description: "Nagpur, Maharashtra, India"
    },
    {
      icon: <Mail size={42} />,
      title: "Email me @",
      description: "abhaylonkar9@gmail.com"
    },
    {
      icon: <Phone size={42} />,
      title: "Call Me @",
      description: "+918788XXXXXX"
    },

  ]

  return (
    <section className='text-white min-h-screen text-center flex flex-col items-center py-24'>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 uppercase mb-2 ">Contact Me</h2>
      <p className='text-xl sm:text-2xl font-semibold mb-2'>I'd love to hear from your</p>
      <p className='text-white/60 mb-8 max-w-3xl mx-auto text-base sm:text-lg px-3'>Whether you have a question, a project in mind, or just want to say hi, I'm all ears!</p>

      <div className='flex flex-col gap-16 md:flex-row justify-center items-center mb-16 mt-10'>
        {contactCards.map((item, index) => <ContactCard key={index} {...item} />)}
      </div>

      <div className='text-gray-500 text-sm flex flex-col items-center gap-2 px-2'>
        <p>© Abhay Lonkar 2025 | Developed with ❤️ by <span className='text-white font-bold'>Abhay Lonkar</span></p>
        <div className='flex items-center gap-8 mt-5'>
          <a href="https://github.com/abhaylonkar">
            <Github className='text-white/60 hover:text-white transition-all' size={20} />
          </a>
          <a href="https://linkedin.com/in/abhaylonkar">
            <Linkedin className='text-white/60 hover:text-white transition-all' size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
