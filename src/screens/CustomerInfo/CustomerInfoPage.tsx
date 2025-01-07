import React, { useEffect, useState } from 'react';
import { Typography, Button, TextField, Tabs, Tab } from '@mui/material';
import CustomerInfo from '@/components/CustomerInfo';
import { Profile } from '../../models/Profile';
import { getCustomerInfo, updateCustomerInfo } from './service/profile.service';
import { toast } from 'react-toastify';


const CustomerInfoPage: React.FC = () => {
  const [profile, setProfile] = useState<Profile>();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  const [originalProfile, setOriginalProfile] = useState(profile); // Backup of original profile

  const handleSaveChanges = () => {
    const isInvalidPhone = profile?.user_phone_number && !/^0\d{9}$/.test(profile.user_phone_number);
    const isInvalidEmail = profile?.user_email && !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(profile.user_email);

    if (!profile?.user_phone_number || !profile?.user_email) {
      toast.error('Vui lòng nhập đầy đủ thông tin');

    } else if (isInvalidPhone && profile?.user_phone_number !== originalProfile?.user_phone_number) {
      toast.error("Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại hợp lệ.");
    } else if (isInvalidEmail && profile?.user_email !== originalProfile?.user_email) {
      toast.error("Email không hợp lệ. Vui lòng nhập email hợp lệ.");
    } else {
      updateCustomerInfo(profile).then((data) => {
        setProfile(data);
        setOriginalProfile(data); // Update backup
        toast.success('Cập nhật thông tin thành công');
      });
      return;
    }

    setTimeout(() => {
      setProfile(originalProfile);
    }, 1000);
  };
  useEffect(() => {
    getCustomerInfo().then((data) => {
      setProfile(data);
      setOriginalProfile(data);
    });
    
  }, []);
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
                <img src={profile?.user_avatar || '../../../../public/profile.png'} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                    style={{ marginBottom: '16px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <TextField
                    label="Tên"
                    variant="outlined"
                    fullWidth
                    // value={}
                    // onChange={(e) => setLastName(e.target.value)}
                    style={{ marginBottom: '16px' }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                <div style={{ flex: 1 }}>
                  <TextField
                    label={originalProfile?.user_phone_number ? '' : 'Số điện thoại'}
                    variant="outlined"
                    fullWidth
                    value={originalProfile?.user_phone_number}
                    onChange={(e) => setProfile(profile ? { ...profile, user_phone_number: e.target.value } : undefined)}
                    style={{ marginBottom: '16px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <TextField
                    label={originalProfile?.user_email ? '' : 'Email'}
                    variant="outlined"
                    fullWidth
                    value={profile?.user_email}
                    onChange={(e) => setProfile(profile ? { ...profile, user_email: e.target.value } : undefined)}
                    style={{ marginBottom: '16px' }}
                  />
                </div>
              </div>
            </div>

            <CustomerInfo handleSaveChanges={handleSaveChanges} />
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
