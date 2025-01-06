import React, { useState } from 'react';
import { Typography, Button, TextField, Tabs, Tab } from '@mui/material';
import CustomerInfo from '@/components/CustomerInfo';

const CustomerInfoPage: React.FC = () => {
  const customerInfo = {
    email: "12345@gmail.com",
    phone: "0901234567",
    customerName: "Nguyễn Văn A",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBodQoJhJGB1qoSvJ-mZeCy61dpq0XZOM8pA&s",
  };

  const [selectedTab, setSelectedTab] = useState(0);
  const [firstName, setFirstName] = useState(customerInfo.customerName.split(' ')[0]);
  const [lastName, setLastName] = useState(customerInfo.customerName.split(' ').slice(1).join(' '));
  const [phoneNumber, setPhoneNumber] = useState(customerInfo.phone);
  const [emailAddress, setEmailAddress] = useState(customerInfo.email);
  const [profileImage, setProfileImage] = useState(customerInfo.imageSrc);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleSaveChanges = () => {
    console.log('Changes saved');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{
        width: '250px', padding: '20px', backgroundColor: '#fff',
        borderRadius: '12px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginRight: '16px',
      }}>
        <Typography
          variant="h5"
          style={{
            fontWeight: 'bold',
            marginBottom: '16px',
            textAlign: 'center'
          }}
        >
          Cài đặt
        </Typography>
        <Tabs value={selectedTab} onChange={handleTabChange} orientation="vertical" style={{ width: '100%' }}>
          <Tab label="Thông tin cá nhân" />
          <Tab label="Đổi mật khẩu" />
          <Tab label="Lịch sử giao dịch" />
          <Tab label="Mã giảm giá" />
          <Tab label="Thông báo" />
        </Tabs>
      </div>

      <div style={{
        width: '70%', padding: '24px', backgroundColor: '#fff', borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginLeft: '-16px'
      }}>
        {selectedTab === 0 && (
          <div>
            <Typography variant="h5" style={{ marginBottom: '16px' }}>Thông tin cá nhân</Typography>

            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', marginRight: '16px' }}>
                <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <Button variant="outlined" style={{ textTransform: 'none' }}>
                Thay đổi ảnh đại diện
              </Button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                <div style={{ flex: 1 }}>
                  <TextField
                    label="Họ"
                    variant="outlined"
                    fullWidth
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ marginBottom: '16px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <TextField
                    label="Tên"
                    variant="outlined"
                    fullWidth
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ marginBottom: '16px' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                <div style={{ flex: 1 }}>
                  <TextField
                    label="Số điện thoại"
                    variant="outlined"
                    fullWidth
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{ marginBottom: '16px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    style={{ marginBottom: '16px' }}
                  />
                </div>
              </div>
            </div>

            <CustomerInfo handleSaveChanges={handleSaveChanges} profileImage={profileImage} />
          </div>
        )}

        {selectedTab === 1 && (
          <div>
            <Typography variant="h5" style={{ marginBottom: '16px' }}>Đổi mật khẩu</Typography>
            <TextField
              label="Mật khẩu cũ"
              variant="outlined"
              fullWidth
              type="password"
              style={{ marginBottom: '16px' }}
            />
            <TextField
              label="Mật khẩu mới"
              variant="outlined"
              fullWidth
              type="password"
              style={{ marginBottom: '16px' }}
            />
            <TextField
              label="Xác nhận mật khẩu"
              variant="outlined"
              fullWidth
              type="password"
              style={{ marginBottom: '16px' }}
            />
            <Button variant="contained" style={{ marginTop: '16px' }}>Lưu thay đổi</Button>
          </div>
        )}

        {selectedTab === 2 && (
          <div>
            <Typography variant="h5" style={{ marginBottom: '16px' }}>Lịch sử giao dịch</Typography>
            <Typography>No transaction history available.</Typography>
          </div>
        )}

        {selectedTab === 3 && (
          <div>
            <Typography variant="h5" style={{ marginBottom: '16px' }}>Mã giảm giá</Typography>
            <Typography>Manage your discount codes here.</Typography>
          </div>
        )}

        {selectedTab === 4 && (
          <div>
            <Typography variant="h5" style={{ marginBottom: '16px' }}>Thông báo</Typography>
            <Typography>Manage your notifications here.</Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerInfoPage;
