import { Link } from 'react-router-dom';
import '../../assets/styles/navbar.css'
import { useTheme } from '../../context/ThemeContex'
import mode from '../../assets/img/lightmode.png'


const Narvbar = () => {
   const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div>
      <header className={`nav-container ${isDarkMode ? 'dark' : 'light'}`}>
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
          <img src={mode} alt='' onClick={toggleTheme}  className='mode'/>
          <button className='btn'>Login</button>
          <button>Signup</button>
        </div>
      </header>
    </div>
  )
}

export default Narvbar
