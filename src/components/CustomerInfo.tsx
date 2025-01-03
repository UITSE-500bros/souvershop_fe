import React from 'react';
import { Button, Typography } from '@mui/material';

interface CustomerInfoProps {
  handleSaveChanges: () => void;
  profileImage: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ handleSaveChanges, profileImage }) => {
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
