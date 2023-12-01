import '../../assets/styles/navbar.css'
import { FaBeer } from 'react-icons/fa'

const Narvbar = () => {
  return (
    <div>
      <header className='nav-container'>
        <h1>Jobbah</h1>
        <div className='nav-list'>
          <ul>
            <li>Community</li>
            <li>Jobs</li>
            <li>For Employers</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className='nav-item'>
          <h3>
            Lets go for a <FaBeer />?
          </h3>
          <button className='btn'>Login</button>
          <button>Signup</button>
        </div>
      </header>
    </div>
  )
}

export default Narvbar
