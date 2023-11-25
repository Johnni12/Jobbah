import React from 'react'
import '../../assets/styles/sidebar.css'
import JobAlert from './JobAlert'
import JobFilter from './JobFilters'


const Sidebar = ({jobs,onFilterChange}) => {
  return (
    <div className='sidebar-container'>
      <JobAlert />
     <JobFilter jobs={jobs} onFilterChange={onFilterChange}/>
    </div>
  )
}

export default Sidebar
