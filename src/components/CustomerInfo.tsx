import React from 'react';
import { Typography, Box, Button, IconButton, MenuItem, Select } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';

interface CustomerInfoProps {
  email: string;
  address: string;
  phone: string;
  bankAccount: string;
  customerName: string; 
  imageSrc: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ email, address, phone, bankAccount, customerName, imageSrc }) => {
  const [selectedBank, setSelectedBank] = React.useState('Visa');
  const maskedBankAccount = `**** **** **** ${bankAccount.slice(-4)}`; 

  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', gap: '24px', padding: '24px', backgroundColor: '#F8F2E5' }}>
      <Box
        sx={{
          width: 320,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          borderRadius: '12px',
          backgroundColor: '#F8F2E5',
          padding: '24px',
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#ff5722' }}>
          Tài khoản
        </Typography>
        <Button
          sx={{
            justifyContent: 'flex-start',
            color: '#333',
            backgroundColor: '#FFF',
            '&:hover': { backgroundColor: '#f0f0f0' },
            padding: '8px 16px',
            textTransform: 'none',
          }}
        >
          Đánh giá và nhận xét
        </Button>
        <Button
          sx={{
            justifyContent: 'flex-start',
            color: '#333',
            backgroundColor: '#FFF',
            '&:hover': { backgroundColor: '#f0f0f0' },
            padding: '8px 16px',
            textTransform: 'none',
          }}
        >
          Lịch sử mua hàng
        </Button>
        <Button
          sx={{
            justifyContent: 'flex-start',
            color: '#333',
            backgroundColor: '#FFF',
            '&:hover': { backgroundColor: '#f0f0f0' },
            padding: '8px 16px',
            textTransform: 'none',
          }}
        >
          Đơn hàng hiện tại
        </Button>
        <Box sx={{ marginTop: 'auto' }}>
          <Button variant="contained" fullWidth 
          sx={{ backgroundColor: '#ff5722', 
          color: '#fff', 
          marginBottom: 1 }}>
            Hồ sơ
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              borderColor: '#ff5722',
              color: '#ff5722',
              '&:hover': { backgroundColor: '#ffebee' },
            }}
          >
            Cài đặt
          </Button>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<LogoutIcon />}
            sx={{
              borderColor: '#ff5722',
              color: '#ff5722',
              mt: 1,
              '&:hover': { backgroundColor: '#ffebee' },
            }}
          >
            Đăng xuất
          </Button>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, padding: '24px', backgroundColor: '#F8F2E5', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <AccountCircleIcon fontSize="large" sx={{ color: '#ff5722' }} />
          <Typography variant="h5" sx={{ marginLeft: '8px', fontWeight: 'bold' }}>
            Hồ sơ khách hàng
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
          <Box sx={{ width: 160, height: 160, overflow: 'hidden', borderRadius: '50%' }}>
            <img src={imageSrc} alt="Customer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box>
            <Typography variant="h6">
              {customerName}
              <IconButton size="small" sx={{ marginLeft: 1 }}>
                <EditIcon fontSize="small" color="primary" />
              </IconButton>
            </Typography>
            <Typography color="textSecondary">
              Số điện thoại: {phone}
              <IconButton size="small" sx={{ marginLeft: 1 }}>
                <EditIcon fontSize="small" color="primary" />
              </IconButton>
            </Typography>
            <Typography color="textSecondary">
              Email: {email}
              <IconButton size="small" sx={{ marginLeft: 1 }}>
                <EditIcon fontSize="small" color="primary" />
              </IconButton>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#000000' }}>Địa chỉ:</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: '#fafafa', borderRadius: '8px', border: '1px solid #ddd' }}>
            <Typography>{address}</Typography>
            <IconButton size="small" sx={{ marginLeft: 'auto' }}>
              <EditIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>

          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#000000' }}>Tài khoản ngân hàng:</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: '#fafafa', borderRadius: '8px', border: '1px solid #ddd' }}>
            <Select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value as string)}
              sx={{ marginRight: 2 }}
            >
              <MenuItem value="Visa">Visa</MenuItem>
              <MenuItem value="MasterCard">MasterCard</MenuItem>
            </Select>
            <Typography>{maskedBankAccount}</Typography>
            <IconButton size="small" sx={{ marginLeft: 'auto' }}>
              <EditIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerInfo;
