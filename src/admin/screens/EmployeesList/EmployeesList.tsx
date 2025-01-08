import React, { useState, useEffect } from 'react';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axiosInstance from '@/services/AxiosInstance';

interface Employee {
  user_name: string | null;
  user_email: string;
  user_address: string | null;
  user_phone_number: string | null;
  salary: number;
  create_at: string;
}

const EmployeesList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isAddingEmployee, setIsAddingEmployee] = useState(false);
  const [newEmployee, setNewEmployee] = useState<Employee>({
    user_name: '',
    user_email: '',
    user_address: '',
    user_phone_number: '',
    salary: 0,
    create_at: new Date().toISOString(),
  });
  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    user_address: '',
    user_phone_number: '',
    salary: '',
  });

  const fetchEmployees = async () => {
    try {
      const res = await axiosInstance.get("admin/get_employee");
      setEmployees(res.data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {
      user_name: newEmployee.user_name ? '' : 'Tên nhân viên không được để trống',
      user_email: newEmployee.user_email ? '' : 'Email không được để trống',
      user_address: newEmployee.user_address ? '' : 'Địa chỉ không được để trống',
      user_phone_number: newEmployee.user_phone_number ? '' : 'Số điện thoại không được để trống',
      salary: newEmployee.salary > 0 ? '' : 'Lương phải lớn hơn 0',
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const handleAddEmployee = () => {
    if (validateForm()) {
      setEmployees([...employees, newEmployee]);
      setIsAddingEmployee(false);
      setNewEmployee({
        user_name: '',
        user_email: '',
        user_address: '',
        user_phone_number: '',
        salary: 0,
        create_at: new Date().toISOString(),
      });
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setIsAddingEmployee(true)}>
        Thêm nhân viên
      </Button>

      {isAddingEmployee && (
        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <div className="w-[400px] rounded-md bg-white p-[20px] shadow-lg">
            <h2 className="mb-4 text-[24px] font-bold">Thêm nhân viên</h2>
            <div className="flex flex-col gap-4">
              <TextField
                label="Tên nhân viên"
                name="user_name"
                value={newEmployee.user_name}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.user_name}
                helperText={errors.user_name}
              />
              <TextField
                label="Email"
                name="user_email"
                value={newEmployee.user_email}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.user_email}
                helperText={errors.user_email}
              />
              <TextField
                label="Địa chỉ"
                name="user_address"
                value={newEmployee.user_address}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.user_address}
                helperText={errors.user_address}
              />
              <TextField
                label="Số điện thoại"
                name="user_phone_number"
                value={newEmployee.user_phone_number}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.user_phone_number}
                helperText={errors.user_phone_number}
              />
              <TextField
                label="Lương"
                name="salary"
                type="number"
                value={newEmployee.salary}
                onChange={handleInputChange}
                fullWidth
                error={!!errors.salary}
                helperText={errors.salary}
              />
              <Button variant="contained" onClick={handleAddEmployee}>
                Thêm
              </Button>
              <Button variant="outlined" onClick={() => setIsAddingEmployee(false)}>
                Hủy
              </Button>
            </div>
          </div>
        </div>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tên nhân viên</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Lương</TableCell>
              <TableCell>Ngày tạo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.user_name}</TableCell>
                <TableCell>{employee.user_email}</TableCell>
                <TableCell>{employee.user_address}</TableCell>
                <TableCell>{employee.user_phone_number}</TableCell>
                <TableCell>{employee.salary}</TableCell>
                <TableCell>{new Date(employee.create_at).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeesList;