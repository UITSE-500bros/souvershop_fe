import { Box, Button, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { useEffect, useState } from "react"
import axiosInstance from "../../../services/AxiosInstance";
import { toast } from "react-toastify";

const getOrders = async () => {
    const response = await axiosInstance.get("employee/orders");
    return response.data;
};

const updateOrderStatus = async (receipt_id: string, status: string) => {
    const response = await axiosInstance.post(`employee/update`, { orderId: receipt_id,status: status });
    return response.data;
}

export default function Manage() {
    useEffect(() => {
        getOrders().then((data: any) => {
            setRows(data);
        });
    }, [])

    const handleStatusChange = (e: SelectChangeEvent<any>, params: any) => {
        updateOrderStatus(params, e.target.value).then((data: any) => {
            toast.success("Cập nhật trạng thái đơn hàng thành công");
            
            getOrders().then((data: any) => {
                setRows(data);
            });
        });
    }
    const [rows, setRows] = useState<GridRowsProp>([]);


    const columns: GridColDef[] = [
        { field: 'receipt_id', headerName: 'ID', width: 200, resizable: false },
        { field: 'created_at', headerName: 'Ngày đặt hàng', width: 250, resizable: false },
        { field: 'total', headerName: 'Tổng tiền', width: 200, resizable: false },
        { field: 'transaction_status', headerName: 'Trạng thái giao dịch', width: 200, resizable: false },
        {
            field: 'status',
            headerName: 'Trạng thái đơn hàng',
            width: 250,
            resizable: false,
            editable: true,
            renderEditCell: (params) => (
                <Select
                    defaultValue={params.value}
                    onChange={(e) => handleStatusChange(e, params.row.receipt_id)}
                    fullWidth
                >
                    <MenuItem value="Đang chờ xử lý">Đang chờ xử lý</MenuItem>
                    <MenuItem value="Đang giao hàng">Đang giao hàng</MenuItem>
                    <MenuItem value="Đang xử lý">Đang xử lý</MenuItem>
                    <MenuItem value="Đang giao hàng">Đang giao hàng</MenuItem>
                    <MenuItem value="Đã giao hàng">Đã giao hàng</MenuItem>
                    <MenuItem value="Đã xác nhận">Đã xác nhận</MenuItem>
                    <MenuItem value="Đã hủy">Đã hủy</MenuItem>
                </Select>
            ),
        }
    ];

    return (
        <div>

            <Box style={{ height: '100%', width: '98%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.receipt_id}
                />
            </Box>

        </div>

    )
}


