import React from 'react';
import { Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

interface ShippingOptionsProps {
  shippingMethod: string;
  setShippingMethod: (method: string) => void;
}

const ShippingOptions: React.FC<ShippingOptionsProps> = ({ shippingMethod, setShippingMethod }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Lựa Chọn Vận Chuyển
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)}>
          <FormControlLabel value="standard" control={<Radio />} label="Giao hàng tiêu chuẩn (20,000 đ)" />
          <FormControlLabel value="express" control={<Radio />} label="Giao hàng nhanh (50,000 đ)" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ShippingOptions;
