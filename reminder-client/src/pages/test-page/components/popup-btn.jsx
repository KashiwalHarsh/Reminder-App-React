import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import './popup-btn.css'; // Import the corresponding CSS file

const PopupBTN = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="reminder-container">
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleOpen}
      >
        Add Reminder
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="reminder-modal-title"
        aria-describedby="reminder-modal-description"
      >
        <div className="reminder-modal">
          <h2 id="reminder-modal-title">Random Text Here</h2>
          <p id="reminder-modal-description">
            This is some random text for the modal.
          </p>
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default PopupBTN;
