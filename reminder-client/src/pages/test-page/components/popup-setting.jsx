import './popup-setting.css';
import { Button, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext';


const PopupSetting = () => {
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {darkTheme} = useContext(ThemeContext)

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
                    <p>
                        Option 1
                    </p>
                    <p>
                        Option 2
                    </p>
                    <div className='center-btn'>
                        <Button onClick={handleClose}><CloseIcon /></Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default PopupSetting