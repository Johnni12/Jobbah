import React from 'react'
import '../../assets/styles/searchjobs.css'

const SearchJobs = () => {
  return (
    <div className='search-container'>
      <input type='text' placeholder='Search by title' />
      <input type='text' placeholder='Search by location' />
      <input type='text' placeholder='Search by company' />
    <button>Find Jobs</button>
    </div>
  )
}

export default SearchJobs
