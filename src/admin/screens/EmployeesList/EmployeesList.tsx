import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { FaUser } from "react-icons/fa";
import ActionButtons from "../../../admin/components/ActionButtons";

export default function EmployeesList() {
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [isSelectingAddType, setIsSelectingAddType] = useState(false);

  const handleAddEmployee = () => {
    setIsSelectingAddType(true);  
  };

  const handleCloseModal = () => {
    setIsAddingEmployee(false);
    setIsSelectingAddType(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
      <div className="flex h-[700px] w-[1096px] flex-col gap-8 bg-white px-[20px] py-[20px] shadow-md relative">
        <div className="flex justify-between items-center">
          <div className="text-[24px] font-bold text-[#333]">Danh sách nhân viên</div>
          <ActionButtons onAddEmployee={handleAddEmployee} />
        </div>

        <div className="flex flex-col gap-5 overflow-auto border border-[#ddd] rounded-md">
          <div className="flex bg-[#f5f5f5] p-[10px] font-bold text-[#333]">
            <div className="flex-1 text-left">Tên nhân viên</div>
            <div className="flex-1 text-left">Mã nhân viên</div>
            <div className="flex-1 text-left">Số điện thoại liên lạc</div>
            <div className="flex-1 text-left">E-mail</div>
            <div className="flex-1 text-left">Loại nhân viên</div>
            <div className="flex-1 text-left">Lương</div>
          </div>
          {[...Array(1)].map((_, index) => (
            <div className="flex p-[10px] border-b border-[#ddd]" key={index}>
              <div className="flex-1 text-left">Nguyễn Văn A</div>
              <div className="flex-1 text-left">NV001</div>
              <div className="flex-1 text-left">0123456789</div>
              <div className="flex-1 text-left">email@example.com</div>
              <div className="flex-1 text-left">Sale</div>
              <div className="flex-1 text-left">10,0000,000 VNĐ</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-[20px] p-[10px] mt-[auto]">
          <Button variant="outlined" sx={{ textTransform: "none", marginRight: "350px" }}>Trước</Button>
          <div>Trang 1 trong 10</div>
          <Button variant="outlined" sx={{ textTransform: "none", marginLeft: "350px" }}>Sau</Button>
        </div>

        {isSelectingAddType && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white w-[400px] p-[20px] rounded-md shadow-lg">
              <h2 className="text-[24px] font-bold mb-4">Chọn kiểu thêm nhân viên</h2>
              <div className="flex flex-col gap-4">
                <Button
                  variant="contained"
                  onClick={() => { setIsAddingEmployee(true); setIsSelectingAddType(false); }}
                  sx={{ marginBottom: "10px" }}
                >
                  Thêm 1 nhân viên
                </Button>
                <Button
                  variant="contained"
                  onClick={() => { setIsSelectingAddType(false); setIsAddingEmployee(true); }}
                  sx={{ marginBottom: "10px" }}
                >
                  Thêm nhiều nhân viên 
                </Button>
                <Button variant="outlined" onClick={handleCloseModal}>Hủy bỏ</Button>
              </div>
            </div>
          </div>
        )}

        {isAddingEmployee && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white w-[400px] p-[20px] rounded-md shadow-lg">
              <h2 className="text-[24px] font-bold mb-4">Thêm Nhân Viên</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-dashed border-2 p-4 mt-4">
                  <div className="w-[100px] h-[100px] rounded-full border-2 border-dashed border-[#ddd] flex justify-center items-center">
                    <FaUser size={60} color="#777777" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-[#858D9D]">Kéo hình ảnh vào đây</div>
                    <div className="text-[#858D9D]">Hoặc</div>
                    <div className="text-[#448DF2]">Duyệt hình ảnh</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <label className="text-[14px] text-[#333] w-[150px]">Tên nhân viên:</label>
                  <TextField fullWidth variant="outlined" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-[14px] text-[#333] w-[150px]">Mã nhân viên:</label>
                  <TextField fullWidth variant="outlined" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-[14px] text-[#333] w-[150px]">Số điện thoại:</label>
                  <TextField fullWidth variant="outlined" />
                </div>
                <div className="flex justify-between items-center gap-10">
                  <label className="text-[14px] text-[#333] w-[100px]">E-mail:</label>
                  <TextField fullWidth variant="outlined" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-[14px] text-[#333]">Loại nhân viên:</label>
                  <TextField sx={{ width: "250px" }} variant="outlined" />
                </div>
                <div className="flex justify-between items-center">
                  <label className="text-[14px] text-[#333]">Lương:</label>
                  <TextField sx={{ width: "250px", height: "44px" }} variant="outlined" />
                </div>
                <div className="flex justify-between mt-4">
                  <Button variant="outlined" onClick={handleCloseModal}>Hủy bỏ</Button>
                  <Button variant="contained" color="primary" onClick={handleCloseModal}>Thêm nhân viên</Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
