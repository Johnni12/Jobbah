// JobListing.jsx
import React from 'react'
import Sidebar from '../homepage/Sidebar'
import JobCard from './JobCard'
import '../../assets/styles/joblisting.css'
import { jobs } from '../../utils/dummy_data'

const JobListing = () => {
  return (
    <div className='job-listing-container'>
      <Sidebar />

      <div className='job-cards-container'>
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            image={job.image}
            description={job.description}
            type={job.type}
            level={job.level}
          />
        ))}
      </div>
    </div>
  )
}

export default JobListing
