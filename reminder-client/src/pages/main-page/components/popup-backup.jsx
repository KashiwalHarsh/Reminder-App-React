import './popup-backup.css';
import { Button, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext, useState } from 'react'
import ThemeContext from '../../../context/ThemeContext';
import BackupIcon from '@mui/icons-material/Backup';


const PopupBackup = () => {
    
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const {darkTheme} = useContext(ThemeContext)


    return (
        <div className="backup-container" >
            <div onClick={handleOpen}>
                <BackupIcon className='nav-icons'/>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="backup-modal" data-theme={darkTheme&&'dark'}>
                    <h2>Backup</h2>
                    <p>Current Not Available</p>
                    <p>Working on It ...</p>
                    <div className='center-btn'>
                        <Button onClick={handleClose}><CloseIcon /></Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default PopupBackup