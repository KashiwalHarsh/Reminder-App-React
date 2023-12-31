import './popup-setting.css';
import { Button, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext';
import BackgroundContext from '../context/BackgroundContext';


const PopupSetting = () => {
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {darkTheme} = useContext(ThemeContext)
    const {background,setBackground} = useContext(BackgroundContext)


    return (
        <div className="setting-container" >
            <div onClick={handleOpen}>
                <SettingsIcon className='icon' />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="setting-modal" data-theme={darkTheme&&'dark'}>
                    <h2>Setting</h2>
                    <p>Select a Custom Background of your choice</p>
                    <h4>Current Background Theme : {background} </h4>
                    <select value={background} onChange={e=>setBackground(e.target.value)}>
                        <option defaultChecked>Forest</option>
                        <option>Mountains</option>
                        <option>Sky</option>
                        <option>Sunset</option>
                        <option>Flowers</option>
                        <option>Dark</option>

                    </select>
                    <div className='center-btn'>
                        <Button onClick={handleClose}><CloseIcon /></Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default PopupSetting