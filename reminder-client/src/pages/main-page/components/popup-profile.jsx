import './popup-profile.css';
import { Button, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Person2Icon from '@mui/icons-material/Person2';
import React, { useContext, useState } from 'react'
import ThemeContext from '../../context/ThemeContext';
import LoginContext from '../../context/LoginContext';


const PopupProfile = ({setUserName}) => {
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {darkTheme} = useContext(ThemeContext)
    const {user,setLoginUser}= useContext(LoginContext)

    setUserName(user.name)

    
    const handleClick =()=>{
        localStorage.setItem("MyUser",JSON.stringify({}))
        setLoginUser({})
    }


    return (
        <div className="profile-container" >
            <div onClick={handleOpen}>
                <Person2Icon className='icon' />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="profile-modal" data-theme={darkTheme&&'dark'}>
                    <h2>Profile</h2>
                    <p>Hey {user.name}</p>
                    <div className='center-btn'>
                        <button onClick={handleClick} className='logout-btn'>Logout</button>
                    </div>
                    <div className='center-btn'>
                        <Button onClick={handleClose}><CloseIcon /></Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default PopupProfile