import React, { useState } from "react";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

interface ShippingOptionsProps {
  shippingMethod: string;
  setShippingMethod: (method: string) => void;
}

const ShippingOptions = () => {
  const [shippingMethod, setShippingMethod] = useState<string>("standard");
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Lựa Chọn Vận Chuyển
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.target.value)}
        >
          <FormControlLabel
            value="standard"
            control={<Radio />}
            label="Giao hàng tiêu chuẩn (20,000 đ)"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default ShippingOptions;
