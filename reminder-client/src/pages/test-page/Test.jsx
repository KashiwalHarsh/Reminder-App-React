import './Test.css';
import React from 'react';
import LeftSection from './components/left-section';
import RightSection from './components/right-section';
import ThemeContextProvider from './context/ThemeContextProvider';
import BackgroundContextProvider from './context/BackgroundContextProvider';
// import axios from 'axios';


function App() {

  // const [reminderMsg,setReminderMsg] = useState("")
  // const [remindAt,setRemindAt] = useState()
  // const [reminderList,setReminderList] = useState([])

  // useEffect(()=>{
  //   axios.get("http://localhost:5000/getAllReminders")
  //   .then(res=>setReminderList(res.data))
  // },[])

  // const addReminder = () =>{
  //   axios.post("http://localhost:5000/addReminder",{reminderMsg,remindAt})
  //   .then(res=>setReminderList(res.data))
  //   setReminderMsg("")
  //   setRemindAt()
  // }
  // const deleteReminder=(id)=>{
  //   axios.post("http://localhost:5000/deleteReminder",{id})
  //   .then(res=>setReminderList(res.data))
  // }
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

export default App;
