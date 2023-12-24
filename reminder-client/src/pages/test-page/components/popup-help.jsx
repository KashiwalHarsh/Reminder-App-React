import { Button,Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import './popup-help.css';


const PopupHelp = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="reminder-container">
            <div className='add-btn' onClick={handleOpen}>
                
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="help-modal">
                    laksjflasdjflj
                    <div className='center-btn'>
                        <Button onClick={handleClose}><CloseIcon /></Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default PopupHelp