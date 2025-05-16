import React from 'react'
import { Github, Link as LinkIcon } from 'lucide-react'

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, image }) => {
  return (
    <div className="w-[340px] bg-white/5 border border-white/10 rounded-lg backdrop-blur-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-blue-400/20 shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/60 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition"
            >
              <LinkIcon size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
