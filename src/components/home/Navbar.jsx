import '../../assets/styles/navbar.css'
import { useTheme } from '../../context/ThemeContex'
import Switch from 'react-switch'
const Narvbar = () => {
  const { isDarkMode, toggleTheme } = useTheme()


  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
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
          <Switch
            onChange={toggleTheme}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={'#2C3E50'}
            checked={true}
          />
          <button className='btn'>Login</button>
          <button>Signup</button>
        </div>
      </header>
    </div>
  )
}

export default Narvbar
