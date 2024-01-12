import React, { useState } from 'react'
import { useTheme } from '../../context/ThemeContex'
import mode from '../../assets/img/lightmode.png'

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleCloseMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div>
      <header className={`nav-container ${isDarkMode ? 'dark' : 'light'}`}>
        <h1>Jobbah</h1>
        <div className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>Community</li>
            <li>Jobs</li>
            <li>For Employers</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className='nav-item'>
          <img src={mode} alt='' onClick={toggleTheme} className='mode'/>
          {/* Hamburger icon for small screens */}
          <div className='hamburger-menu' onClick={handleMenuToggle}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
          <button className='btn'>Login</button>
          <button>Signup</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
