import axiosInstance from "@/services/AxiosInstance";

interface NewEmployee {
  user_name: string;
  user_password: string;
  user_email: string;
  user_phoneNumber: string;
  user_address: string;
  salary: number;
  create_at: string;
}

export const addEmployee = async (employee: NewEmployee) => {
  const response = await axiosInstance.post("admin/create_employee", employee);
  return response;
};