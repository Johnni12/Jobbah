import React from 'react'
import '../../assets/styles/jobcard.css'
import { Link } from 'react-router-dom'

const JobCard = ({ title, level, location, type, description, image ,id}) => {
  return (
    <Link to={`/job-details/${id}`} className='job-card'>
      <div>
        <img src={image} alt='company-logo' />
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{type}</span>
        <span>{level}</span>
        <span>{location}</span>
      </div>
    </Link>
  )
}

export default JobCard
