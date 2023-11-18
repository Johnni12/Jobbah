// JobCard.jsx
import React from 'react'
import '../../assets/styles/jobcard.css'

const JobCard = ({ title, level,type,description, image }) => {
  return (
    <div className='job-card'>
     
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{type}</span>
      <span>{ level}</span>
    </div>
  )
}

export default JobCard
