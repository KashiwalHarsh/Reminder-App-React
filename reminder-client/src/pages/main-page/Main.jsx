import './Main.css';
import React from 'react';
import LeftSection from './components/left-section';
import RightSection from './components/right-section';



function Main() {
  return (

    <div className='parent'>
      <LeftSection/>
      <RightSection/>
    </div>

  );
}

export default Main;
