import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface CustomerInfoProps {
  email: string;
  address: string;
  phone: string;
  bankAccount: string;
  customerName: string; 
  imageSrc: string; 
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ email, address, phone, bankAccount, customerName, imageSrc }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', marginLeft: '24px' }}>
      <Box
        sx={{
          width: 276,
          height: 700,
          border: '1px solid #ccc',
          borderRadius: '16px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          position: 'fixed',
          left: '0',
          backgroundColor: '#EEEFF1',
        }}
      >
        <Typography variant="h6" align="center">Dashboard</Typography>

      
        <Button 
            sx={{ 
                width: 250, 
                height: 49, 
                backgroundColor: '#ffffff', 
                color: '#0B2F64', 
                padding: '8px', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'flex-start', 
                pl: 2 
            }}
            >
            <Typography variant="subtitle1">Rating and Reviews</Typography>
            </Button>

            <Button 
            sx={{ 
                width: 250, 
                height: 49, 
                backgroundColor: '#ffffff', 
                color: '#0B2F64', 
                padding: '8px', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'flex-start', 
                pl: 2 
            }}
            >
            <Typography variant="body2">Feedback</Typography>
        </Button>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start', marginTop: 'auto' }}>
          <Button variant="contained" sx={{ width: 250, height: 35 }}>Profile</Button>
          <Button variant="contained"  
          sx={{ 
            width: 250, 
            height: 35,
            backgroundColor: '#FFFFFF',
            color: '#0B2F64',
            '&:hover': {
                backgroundColor: '#F0F0F0', 
            }, 
            }}>
                Settings</Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '1081px', 
          height: 88,
          padding: '16px',
          borderRadius: '0',
          backgroundColor: '#e0e0e0',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          marginLeft: '276px',
        }}
      >
        <AccountCircleIcon fontSize="large" />
        <Typography variant="h5" sx={{ marginLeft: '8px' }}>Profile</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: 'calc(100% - 276px)',
          marginLeft: '276px',
          marginTop: '16px',
          gap: '16px',
        }}
      >
        <Box
          sx={{
            width: 268,
            height: 374,
            backgroundColor: '#f5f5f5',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            padding: '16px',
          }}
        >
          <img
            src={imageSrc}
            alt="Customer"
            style={{ width: '100%', height: 'auto', borderRadius: '16px', objectFit: 'cover' }}
          />
          <Typography variant="subtitle1" align="center" sx={{ marginTop: '8px' }}>
            {customerName} 
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            height: 437,
            backgroundColor: '#f5f5f5',
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Box sx={{ width: 577, height: 71 }}>
            <Typography variant="subtitle2" sx={{ padding: '8px' }}>Email</Typography>
            <Box sx={{ width: '100%', height: 46, border: '1px solid #ccc', backgroundColor: '#fff', padding: '8px' }}>
              <Typography variant="body1">{email}</Typography>
            </Box>
          </Box>

          <Box sx={{ width: 577, height: 71 }}>
            <Typography variant="subtitle2" sx={{ padding: '8px' }}>Địa Chỉ</Typography>
            <Box sx={{ width: '100%', height: 46, border: '1px solid #ccc', backgroundColor: '#fff', padding: '8px' }}>
              <Typography variant="body1">{address}</Typography>
            </Box>
          </Box>

          <Box sx={{ width: 577, height: 71 }}>
            <Typography variant="subtitle2" sx={{ padding: '8px' }}>Số Điện Thoại</Typography>
            <Box sx={{ width: '100%', height: 46, border: '1px solid #ccc', backgroundColor: '#fff', padding: '8px' }}>
              <Typography variant="body1">{phone}</Typography>
            </Box>
          </Box>

          <Box sx={{ width: 577, height: 71 }}>
            <Typography variant="subtitle2" sx={{ padding: '8px' }}>Tài Khoản Ngân Hàng</Typography>
            <Box sx={{ width: '100%', height: 46, border: '1px solid #ccc', backgroundColor: '#fff', padding: '8px' }}>
              <Typography variant="body1">{bankAccount}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerInfo;
