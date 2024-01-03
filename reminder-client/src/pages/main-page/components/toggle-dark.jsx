import React,{useContext} from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThemeContext from '../../../context/ThemeContext';

const DarkToggle = ({handleChange}) => {

  const {darkTheme} = useContext(ThemeContext)
  return (
    <>
        {darkTheme
        ?<LightModeIcon 
          className='nav-icons'
          onClick={handleChange}
        />
        :<DarkModeIcon 
          className='nav-icons'
          onClick={handleChange}
        />
        }

    
    </>
  )
}

export default DarkToggle