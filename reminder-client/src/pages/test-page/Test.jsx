import './Test.css';
import React from 'react';
import LeftSection from './components/left-section';
import RightSection from './components/right-section';
import ThemeContextProvider from './context/ThemeContextProvider';
import BackgroundContextProvider from './context/BackgroundContextProvider';


function Test() {
  return (
    <ThemeContextProvider>
    <BackgroundContextProvider>
    <div className='parent'>
      <LeftSection/>
      <RightSection/>
    </div>
    </BackgroundContextProvider>
    </ThemeContextProvider>
  );
}

export default Test;
