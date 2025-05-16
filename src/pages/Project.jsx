import React from 'react'
import ProjectCard from '../components/ProjectCard'



const Project = () => {
  const projects = [
    {
      title: "AiEnhance",
      description: "An Ai powered image enhancer! Upload your image and watch it transform into a higher-resolution version in one click.",
      image: "/src/assets/projects/aienhance.png",
      liveLink: "https://aienhance.vercel.app/",
      githubLink: "https://github.com/AbhayLonkar/AiEnhance",
      techStack: ["React", "Tailwind CSS", "Picsart API", "Vercel"],
    },
    {
      title: "Chess Web App",
      description: "Developed an interactive chess game using JavaScript and the chess.js library. Utilized external libraries to enhance the gaming experience.",
      image: "/src/assets/projects/chess-game.png",
      liveLink: "https://abhaylonkar.github.io/chess/",
      githubLink: "https://github.com/AbhayLonkar/chess.git",
      techStack: ["HTML", "CSS", "JS", "Chess.js", "Chessboard.js"],

    },
    {
      title: "News Android App",
      description: "Created a real-time news app showcasing Nagpur's latest updates. Eliminiated reptitive content by sorting news based on dates.",
      image: "/src/assets/projects/news-app.png",
      liveLink: "https://github.com/AbhayLonkar/news-app",
      githubLink: "https://github.com/AbhayLonkar/news-app",
      techStack: ["Android Studio", "Java", "Restfull APIs", "SQLite"],
    },
  ]

  return (
    <div className='min-h-screen text-white py-20 px-4'>
      <h1 className='text-4xl font-bold text-center text-cyan-400 uppercase'>Projects</h1>
      <p className='text-center text-xl font-semibold mt-2 mb-10'>Here are my some Works</p>

      <div className='flex flex-wrap justify-center gap-6 max-w-7xl mx-auto'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Project
