import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import JobDetails from '../pages/JobDetails'
import UserAccount from '../pages/UserAccount'


const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Homepage />} />
      <Route path='job-details' element={<JobDetails />} />
      <Route path='user-account' element={<UserAccount />} />
    
    </Routes>
  )
}

export default AppRouter
