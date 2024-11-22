import React from 'react';
import { Box } from '@mui/material';
import CustomerInfo from '../../components/CustomerInfo';


const CustomerInfoPage: React.FC = () => {
  const customerInfo = {
    email: "12345@gmail.com",
    address: "Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.",
    phone: "0901234567",
    bankAccount: "123456789",
    customerName: "Nguyễn Văn A", 
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBodQoJhJGB1qoSvJ-mZeCy61dpq0XZOM8pA&s", 

 };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
      padding={2}
    >
      
        <CustomerInfo
          email={customerInfo.email}
          address={customerInfo.address}
          phone={customerInfo.phone}
          bankAccount={customerInfo.bankAccount}
          customerName={customerInfo.customerName} 
          imageSrc={customerInfo.imageSrc} 
        />
    </Box>
  );
};

export default CustomerInfoPage;
