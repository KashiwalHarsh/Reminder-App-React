import './Main.css';
import React from 'react';
import LeftSection from './components/left-section';
import RightSection from './components/right-section';
import ThemeContextProvider from './context/ThemeContextProvider';
import BackgroundContextProvider from './context/BackgroundContextProvider';
import ReminderContextProvider from './context/ReminderContextProvider';


function Main() {
  return (
    <ThemeContextProvider>
    <BackgroundContextProvider>
    <ReminderContextProvider>
    <div className='parent'>
      <LeftSection/>
      <RightSection/>
    </div>
    </ReminderContextProvider>
    </BackgroundContextProvider>
    </ThemeContextProvider>
  );
}

export default Main;
