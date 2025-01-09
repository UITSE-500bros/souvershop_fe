import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const Discount = () => {
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState('');
  const [value, setValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setEventName('');
    setValue('');
    setStartDate('');
    setEndDate('');
  };

  const handleSave = () => {
    // Validate date input (optional)
    const isValidDate = (date: string) => !isNaN(new Date(date).getTime());
    if (!isValidDate(startDate) || !isValidDate(endDate)) {
      alert('Please enter valid dates in the format YYYY-MM-DD');
      return;
    }

    // Handle the form submission logic here (e.g., send data to API)
    console.log({
      eventName,
      value,
      startDate,
      endDate,
    });
    handleClose();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create New Discount Campaign
      </Button>

      {/* Dialog for collecting campaign info */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Discount Campaign</DialogTitle>
        <DialogContent>
          {/* Event Name Input */}
          <TextField
            autoFocus
            margin="dense"
            label="Event Name"
            type="text"
            fullWidth
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />

          {/* Value Input */}
          <TextField
            margin="dense"
            label="Discount Value (%)"
            type="number"
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          {/* Start Date Input */}
          <TextField
            margin="dense"
            label="Start Date (YYYY-MM-DD)"
            type="text"
            fullWidth
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          {/* End Date Input */}
          <TextField
            margin="dense"
            label="End Date (YYYY-MM-DD)"
            type="text"
            fullWidth
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Discount;
