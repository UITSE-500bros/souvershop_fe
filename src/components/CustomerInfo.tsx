import { Button } from '@mui/material';
import React from 'react';

interface CustomerInfoProps {
  handleSaveChanges: () => void;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ handleSaveChanges }) => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleSaveChanges} style={{ padding: '8px 16px' }}>
          Lưu thay đổi
        </Button>
      </div>
    </div>
  );
};

export default CustomerInfo;
