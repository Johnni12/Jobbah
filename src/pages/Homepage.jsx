import Navbar from '../components/home/Navbar'
import JobListings from '../components/home/JobListings'
import '.././assets/styles/homepage.css'

const Homepage = () => {
  return (
    <div>
      <Navbar />
     <JobListings/>
    </div>
  )
}

export default Homepage