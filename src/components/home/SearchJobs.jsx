import React, { useState } from 'react'
import '../../assets/styles/searchjobs.css'
import { jobs  } from '../../utils/dummy_data'

const SearchJobs = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    title: '',
    location: '',
    jobType: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const filteredJobs = jobs.filter((job) => {
      const titleMatch =
        job.title &&
        job.title.toLowerCase().includes(filters.title.toLowerCase())
      const locationMatch =
        job.location &&
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      const jobTypeMatch =
        job.type &&
        job.type.toLowerCase().includes(filters.jobType.toLowerCase())

      return jobTypeMatch && locationMatch && titleMatch
    })

    setFilters({
      title: '',
      location: '',
      jobType: '',
    })

    // Call the callback function with the filtered jobs
    onFilterChange(filteredJobs)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }))
  }

  return (
    <form className='search-container' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Job title'
        name='title'
        value={filters.title}
        onChange={handleInputChange}
      />
      <input
        type='text'
        placeholder='Location'
        name='location'
        value={filters.location}
        onChange={handleInputChange}
      />
      <input
        type='text'
        placeholder='Job Type'
        name='jobType'
        value={filters.jobType}
        onChange={handleInputChange}
      />
      <button type='submit'>Find Jobs</button>
    </form>
  )
}

export default SearchJobs
