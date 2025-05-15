import React from 'react'
import GitHubCalendar from 'react-github-calendar'

const GithubContributionGraph = () => {
  return (
    <div className="p-4 rounded-lg shadow-lg shadow-orange-400/20 overflow-x-auto cursor-pointer">
      <h2 className="text-xl font-bold mb-2 text-center md:text-left">GitHub Contributions</h2>
      <div className='flex justify-center items-center'>
        <GitHubCalendar
          username="abhaylonkar"
          fontSize={12}
          blockSize={10}
          year={2025}
        />
      </div>
    </div>
  )
}

export default GithubContributionGraph
