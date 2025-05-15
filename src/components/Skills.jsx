import React from 'react'
import C from '../assets/icons/C.svg'
import CPP from '../assets/icons/CPP.svg'
import java from '../assets/icons/java.svg'
import html from '../assets/icons/html.svg'
import css from '../assets/icons/css.svg'
import js from '../assets/icons/js.svg'
import python from '../assets/icons/py.svg'
import kotlin from '../assets/icons/kt.svg'
import typescript from '../assets/icons/ts.svg'
import sql from '../assets/icons/sql.svg'
import mongodb from '../assets/icons/md.svg'
import php from '../assets/icons/php.svg'
import react from '../assets/icons/react.svg'
import nodejs from '../assets/icons/nodejs.svg'
import android from '../assets/icons/android.svg'
import tailwind from '../assets/icons/tailwind.svg'
import vite from '../assets/icons/vite.svg'
import npm from '../assets/icons/npm.svg'



const Skills = () => {
  return (
    <div className='my-5 flex justify-center items-center flex-col md:max-w-xl'>
      <div className='flex flex-wrap mt-5 gap-2 justify-center'>
        <img src={C} alt="C Programming" />
        <img src={CPP} alt="C++" />
        <img src={java} alt="Java" />
        <img src={html} alt="Html" />
        <img src={css} alt="Css" />
        <img src={js} alt="js" />
        <img src={python} alt="python" />
        <img src={kotlin} alt="kotlin" />
        <img src={typescript} alt="typescript" />
        <img src={sql} alt="sql" />
        <img src={mongodb} alt="mongodb" />
        <img src={php} alt="php" />
        <img src={react} alt="React JS" />
        <img src={nodejs} alt="Node JS" />
        <img src={android} alt="Android Studio" />
        <img src={tailwind} alt="TailwindCSS" />
        <img src={vite} alt="VITE" />
        <img src={npm} alt="NPM" />
      </div>
    </div>
  )
}

export default Skills;
