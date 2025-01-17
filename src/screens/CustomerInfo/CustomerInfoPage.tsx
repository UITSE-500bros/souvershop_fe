import React, { useEffect, useState } from "react";
import { Typography, Button, TextField, Tabs, Tab, Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { toast } from "react-toastify";
import CustomerInfo from "@/components/CustomerInfo";
import { Profile } from "../../models/Profile";
import {
  cancelOrder,
  getCustomeOrders,
  getCustomerInfo,
  updateCustomerInfo,
} from "./service/profile.service";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axiosInstance from "@/services/AxiosInstance";

const discountCodes = [
  { id: 1, name: "DISCOUNT10", value: "10%" },
  { id: 2, name: "DISCOUNT20", value: "20%" },
  { id: 3, name: "DISCOUNT30", value: "30%" },
];
const CustomerInfoPage: React.FC = () => {
  const [profile, setProfile] = useState<Profile | undefined>();
  const [originalProfile, setOriginalProfile] = useState<Profile | undefined>();
  const [selectedTab, setSelectedTab] = useState(0);
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [discounts, setDiscounts] = useState([]);
  const fetchDiscounts = async () => {
    try {
      const response = await axiosInstance.get("/customer/discounts");
      setDiscounts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) =>
    setSelectedTab(newValue);

  const handleSaveChanges = () => {
    if (!profile?.user_phone_number || !profile?.user_email) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const isInvalidPhone =
      profile.user_phone_number && !/^0\d{9}$/.test(profile.user_phone_number);
    const isInvalidEmail =
      profile.user_email &&
      !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(profile.user_email);

    if (
      isInvalidPhone &&
      profile.user_phone_number !== originalProfile?.user_phone_number
    ) {
      toast.error(
        "Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại hợp lệ.",
      );
    } else if (
      isInvalidEmail &&
      profile.user_email !== originalProfile?.user_email
    ) {
      toast.error("Email không hợp lệ. Vui lòng nhập email hợp lệ.");
    } else {
      updateCustomerInfo(profile).then((data) => {
        setProfile(data);
        setOriginalProfile(data);
        toast.success("Cập nhật thông tin thành công");
      });
    }
  };

  const handleCancelOrder = (orderId: string) => {
    cancelOrder(orderId).then((res) => {
      toast.success(res);
    });
  };

  const columns: GridColDef[] = [
    { field: "receipt_id", headerName: "ID", width: 200, resizable: false },
    {
      field: "created_at",
      headerName: "Ngày đặt hàng",
      width: 250,
      resizable: false,
    },
    { field: "total", headerName: "Tổng tiền", width: 200, resizable: false },
    {
      field: "transaction_status",
      headerName: "Trạng thái",
      width: 200,
      resizable: false,
    },
    {
      field: "action",
      headerName: "Hành động",
      width: 130,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleCancelOrder(params.row.receipt_id)}
        >
          Hủy
        </Button>
      ),
      resizable: false,
    },
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      setSelectedFile(file);

      // Generate a preview URL for the selected image
      const previewURL = URL.createObjectURL(file);
      setProfile((prevProfile) =>
        prevProfile ? { ...prevProfile, user_avatar: previewURL } : undefined,
      );
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("YOUR_BACKEND_URL/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      alert("File uploaded successfully!");
      // Optionally update `profile.user_avatar` with the URL returned from the backend
      if (result.fileUrl) {
        setProfile((prevProfile) =>
          prevProfile ? { ...prevProfile, user_avatar: result } : undefined,
        );
      }
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Failed to upload file.");
    }
  };

  useEffect(() => {
    getCustomerInfo().then((data) => {
      setProfile(data);
      setOriginalProfile(data);
    });

    fetchDiscounts();

    getCustomeOrders().then((data) => setRows(data));
  }, []);
  console.log(discounts);
  

  const containerStyle = {
    display: "flex",
    height: "100vh",
  };

  const sidebarStyle = {
    width: "300px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    marginRight: "16px",
  };

  const contentStyle = {
    flex: 1,
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Cài đặt
        </Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          orientation="vertical"
          style={{ width: "100%" }}
        >
          <Tab label="Thông tin cá nhân" />
          <Tab label="Đổi mật khẩu" />
          <Tab label="Lịch sử giao dịch" />
          <Tab label="Mã giảm giá" />
        </Tabs>
      </div>

      <div style={contentStyle}>
        {selectedTab === 0 && (
          <div>
            <Typography variant="h5" style={{ marginBottom: "16px" }}>
              Thông tin cá nhân
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginRight: "16px",
                }}
              >
                <img
                  src={profile?.user_avatar || "profile.png"}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <input type="file" onChange={handleFileChange} accept="image/*" />
            </div>

            <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
              <TextField
                label="Số điện thoại"
                variant="outlined"
                fullWidth
                value={profile?.user_phone_number || ""}
                onChange={(e) =>
                  setProfile((prev) =>
                    prev
                      ? { ...prev, user_phone_number: e.target.value }
                      : undefined,
                  )
                }
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={profile?.user_email || ""}
                onChange={(e) =>
                  setProfile((prev) =>
                    prev ? { ...prev, user_email: e.target.value } : undefined,
                  )
                }
              />
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                value={profile?.user_address || ""}
                onChange={(e) =>
                  setProfile((prev) =>
                    prev
                      ? { ...prev, user_address: e.target.value }
                      : undefined,
                  )
                }
              />
            </div>
            <CustomerInfo handleSaveChanges={handleSaveChanges} />
          </div>
        )}

        {selectedTab === 1 && (
          <div>
            <Typography variant="h5" style={{ marginBottom: "16px" }}>
              Đổi mật khẩu
            </Typography>
            <TextField
              label="Mật khẩu cũ"
              variant="outlined"
              fullWidth
              type="password"
              style={{ marginBottom: "16px" }}
            />
            <TextField
              label="Mật khẩu mới"
              variant="outlined"
              fullWidth
              type="password"
              style={{ marginBottom: "16px" }}
            />
            <TextField
              label="Xác nhận mật khẩu"
              variant="outlined"
              fullWidth
              type="password"
              style={{ marginBottom: "16px" }}
            />
            <Button variant="contained" style={{ marginTop: "16px" }}>
              Lưu thay đổi
            </Button>
          </div>
        )}

        {selectedTab === 2 && (
          <div>
            <Typography variant="h5" style={{ marginBottom: "16px" }}>
              Lịch sử giao dịch
            </Typography>
            <Box style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.receipt_id} // Use `receipt_id` as the unique identifier
              />
            </Box>
          </div>
        )}
        {selectedTab === 3 && (
          <div>
            <Typography variant="h5" style={{ marginBottom: "16px" }}>
              Mã giảm giá
            </Typography>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Tên</TableCell>
                    <TableCell>Giá trị giảm</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array.isArray(discounts) &&discounts.map((code) => (
                    <TableRow key={code.id}>
                      <TableCell>{code.id}</TableCell>
                      <TableCell>{code.discount_name}</TableCell>
                      <TableCell>{code.discount_value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerInfoPage;
