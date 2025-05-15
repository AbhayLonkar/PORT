import React, { useState } from 'react'
import { Home, User, FolderDot, Phone, Github } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [_, setSelected] = useState("");
  const location = useLocation();
  const navItems = [
    { name: '', icon: <Home size={16} />, path: '/' },
    { name: 'about', icon: <User size={16} />, path: '/about' },
    { name: 'project', icon: <FolderDot size={16} />, path: '/project' },
    { name: 'contact', icon: <Phone size={16} />, path: '/contact' }
  ];
  return (
    <>
      {/* Top navbar - only on md and larger */}
      <div className="w-full fixed top-0 z-50 bg-gradient-to-b px-6 py-4 hidden md:block ">
        <nav className="flex justify-between items-center">
          <div>
            <p className="text-white text-sm">Asia/India</p>
          </div>

          <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md shadow-md">
            <ul className="flex items-center gap-3 text-white text-sm">
              {navItems.map((item, index) => (
                <Link key={index} to={item.path} className={`flex items-center `}>
                  < li
                    className={`flex items-center  ${item.name === '' ? 'gap-0' : 'gap-1'} px-2 py-1 rounded-full cursor-pointer transition ${location.pathname === item.path ? "bg-white/10" : ""
                      }`}
                    onClick={() => {
                      setSelected(item.name)
                      scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      })
                    }}
                  >
                    {item.icon}
                    <span className="capitalize">{item.name}</span>
                  </li>
                </Link>
              ))}

            </ul>
          </div>

          <div className="text-white text-sm">
            <a href="http://github.com/abhaylonkar" target='_blank'>
              <Github size={24} />
            </a>
          </div>
        </nav >
      </div >

      {/* Bottom navbar - only on mobile */}
      < div className=" fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 block md:hidden " >
        <nav className="bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md shadow-md">
          <ul className="flex items-center gap-3 text-white text-sm">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="flex items-center gap-1">
                <li
                  className={`flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer transition ${location.pathname === item.path ? "bg-white/10" : ""
                    }`}
                  onClick={() => setSelected(item.name)}
                >
                  {item.icon}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div >
    </>
  );
};

export default Navbar;
