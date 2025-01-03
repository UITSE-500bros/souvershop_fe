import React from 'react';
import { Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

interface PaymentDetailsProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Chi Tiết Thanh Toán
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <FormControlLabel value="VNpapy" control={<Radio />} label="VNpay" />
          <FormControlLabel value="cod" control={<Radio />} label="Thanh toán khi nhận hàng" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default PaymentDetails;
