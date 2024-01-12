import React, { useState } from 'react'


const JobFilter = ({ jobs, onFilterChange }) => {
  const [selectedTypes, setSelectedTypes] = useState([])

  const handleCheckboxChange = (type) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((selectedType) => selectedType !== type)
      : [...selectedTypes, type]

    setSelectedTypes(updatedTypes)
    filterJobs(updatedTypes)
  }

  const filterJobs = (types) => {
    const filteredJobs =
      types.length > 0 ? jobs.filter((job) => types.includes(job.type)) : jobs

    onFilterChange(filteredJobs)
  }

  const getUniqueTypesWithCount = () => {
    const typeCounts = jobs.reduce((counts, job) => {
      counts[job.type] = (counts[job.type] || 0) + 1
      return counts
    }, {})

    return Object.entries(typeCounts).map(([type, count]) => ({
      type,
      count,
    }))
  }

  return (
    <div>
      <h2>Type of Employment</h2>
      {getUniqueTypesWithCount().map(({ type, count }) => (
        <label key={type}>
          <div>
            <input
              type='checkbox'
              checked={selectedTypes.includes(type)}
              onChange={() => handleCheckboxChange(type)}
            />
            {type}
          </div>
          {count.toString()}
        </label>
      ))}
    </div>
  )
}

export default JobFilter
