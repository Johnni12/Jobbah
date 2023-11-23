import Navbar from '../components/home/Navbar'
import JobListings from '../components/home/JobListings'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <JobListings />
    </div>
  )
}

export default Homepage