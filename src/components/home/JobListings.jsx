import React, { useState } from 'react'
import Sidebar from './Sidebar'
import JobCard from './JobCard'
import SearchJobs from './SearchJobs'
import Pagination from '../../utils/Pagination'
import { jobs } from '../../utils/dummy_data'

const itemsPerPage = 9 

const JobListing = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  
  const currentJobs = filteredJobs.slice(startIndex, endIndex)

  const handleFilterChange = (filteredJobs) => {
    setFilteredJobs(filteredJobs)
    setCurrentPage(1)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <SearchJobs onFilterChange={handleFilterChange} />
      <div className='job-listing-container'>
        <Sidebar jobs={jobs} onFilterChange={handleFilterChange} />

        <div className='job-cards-container'>
          {currentJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              image={job.image}
              description={job.description}
              type={job.type}
              id={job.id}
              level={job.level}
              location={job.location}
            />
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredJobs.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  )
}

export default JobListing




/*

***Data fetching component***

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import JobCard from './JobCard';
import SearchJobs from './SearchJobs';
import '../../assets/styles/joblisting.css';

const JobListing = () => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Async function to fetch jobs from the backend
    const fetchJobs = async () => {
      try {
        const response = await fetch('API');
        const data = await response.json();
        setFilteredJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    fetchJobs();
  }, []); 
  const handleFilterChange = (filteredJobs) => {
    setFilteredJobs(filteredJobs);
  };

  return (
    <>
      <SearchJobs onFilterChange={handleFilterChange} />
      <div className='job-listing-container'>
        <Sidebar jobs={filteredJobs} onFilterChange={handleFilterChange} />

        <div className='job-cards-container'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                image={job.image}
                description={job.description}
                type={job.type}
                level={job.level}
                location={job.location}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default JobListing;
*/
