import React, { useState } from 'react'
import Sidebar from './Sidebar'
import JobCard from './JobCard'
import SearchJobs from './SearchJobs' 
import '../../assets/styles/joblisting.css'
import { jobs } from '../../utils/dummy_data'

const JobListing = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const handleFilterChange = (filteredJobs) => {
    setFilteredJobs(filteredJobs)
  }

  return (
    <>
      <SearchJobs onFilterChange={handleFilterChange} />
      <div className='job-listing-container'>
        <Sidebar />

        <div className='job-cards-container'>
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              image={job.image}
              description={job.description}
              type={job.type}
              level={job.level}
              location={job.location}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default JobListing
