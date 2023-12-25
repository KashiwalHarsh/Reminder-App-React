import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DarkToggle = ({handleChange}) => {
  return (
    <DarkModeIcon 
        className='nav-icons'
        onClick={handleChange}
    />
  )
}

export default DarkToggle