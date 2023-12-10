import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import JobListing from '../pages/JobListing'
import JobDetails from '../pages/JobDetails'
import UserAccount from '../pages/UserAccount'
import ApplicationProcess from '../pages/ApplicationProcess'
import Notification from '../pages/Notification'
import SEO from '../pages/SEO'
import SocialMedia from '../pages/SocialMedia'
import AdvancedFeatures from '../pages/AdvancedFeatures'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Homepage />} />
      <Route path='/job-listing' element={<JobListing />} />
      <Route path='/job-details/:jobId' element={<JobDetails />} />
      <Route path='/user-accounts' element={<UserAccount />} />
      <Route path='/application-process' element={<ApplicationProcess />} />
      <Route path='/notification' element={<Notification />} />
      <Route path='/seo-and-analytics' element={<SEO />} />
      <Route path='/social-media' element={<SocialMedia />} />
      <Route path='/advanced-features' element={<AdvancedFeatures />} />
    </Routes>
  )
}

export default AppRouter
