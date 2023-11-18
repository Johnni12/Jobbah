import Navbar from '../components/homepage/Navbar'
import JobListings from '../components/jobListings/JobListings'
import SearchJobs from '../components/jobListings/SearchJobs'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <SearchJobs />
      <JobListings />
    </div>
  )
}

export default Homepage