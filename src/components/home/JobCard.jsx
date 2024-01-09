import React from 'react'
import '../../assets/styles/jobcard.css'

const JobCard = ({ title, level,location,type,description, image }) => {
  return (
    <div className='job-card'>
      <img src={image} alt='company-logo' />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{type}</span>
      <span>{level}</span>
      <span>{location}</span>
    </div>
  )
}

export default JobCard
