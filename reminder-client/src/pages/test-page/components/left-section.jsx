import './left-section.css';
import React, {useContext } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import SettingsIcon from '@mui/icons-material/Settings';
import BackupIcon from '@mui/icons-material/Backup';
import Person2Icon from '@mui/icons-material/Person2';
import PopupBTN from './popup-btn';
import PopupAbout from './popup-about';
import DarkToggle from './toggle-dark';
import ThemeContext from '../context/ThemeContext';

const LeftSection = () => {

  const {darkTheme,setDarkTheme}= useContext(ThemeContext)

  const handle = (e)=>{    
    e.preventDefault()
    setDarkTheme(prevState =>(
      !prevState
    ))
  }

  return (
    <div className='left-section' data-theme={darkTheme&&'dark'}>
        <div className='upper'>
          <PopupBTN/>
        </div>
        <div className='lower'>
          <div className='icon-container'>
            <a href='https://github.com/KashiwalHarsh/Reminder-App-React' target='_blank' rel='noreferrer'>
              <GitHubIcon className='nav-icons'/>
            </a>
            <span>Contribute</span>
          </div>
          <div className='icon-container'>
              <PopupAbout/>
              <span>About</span>
          </div>
          <div className='icon-container'>
            <DarkToggle 
              handleChange={handle}
            />
            <span>{darkTheme?'Light Mode':'Dark Mode'}</span>
          </div>
          <div className='icon-container'>
            <SettingsIcon className='nav-icons'/>
            <span>Setting</span>
          </div>
          <div className='icon-container'>
            <BackupIcon className='nav-icons'/>
            <span>Backup</span>
          </div>
          <div className='icon-container'>
            <Person2Icon className='nav-icons'/>
            <span>Profile</span>
          </div>
        </div>
      </div>
  )
}

export default LeftSection