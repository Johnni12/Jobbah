import '../../assets/styles/navbar.css'
import React from 'react'

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
            <li>For Employers</li>
          </ul>
        </div>
        <div className='nav-item'>
          <button className='btn'>Login</button>
          <button>Signup</button>
        </div>
      </header>
    </div>
  )
}

export default Narvbar
