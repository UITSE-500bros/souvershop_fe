import React from 'react';
import { Button } from '@mui/material';

interface ConfirmationButtonProps {
  onConfirm: () => void;
}

const ConfirmationButton: React.FC<ConfirmationButtonProps> = ({ onConfirm }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Button variant="contained" color="primary" onClick={onConfirm}>
        Xác Nhận Đơn Hàng
      </Button>
    </div>
  );
};

export default ConfirmationButton;
