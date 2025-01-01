import Container from "@/admin/components/Container";
import { formatPrice } from "@/utils/FormatPrice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import React from "react";
import ReportLineChart from "./ReportLineChart";
import { linechart, tableReport } from "./fakedata";

const tableData = [
  {
    "Danh mục": "Sản phẩm A",
    "Doanh thu": 1000000,
    "Mức độ tăng trưởng": "10%",
  },
  {
    "Danh mục": "Sản phẩm B",
    "Doanh thu": 1500000,
    "Mức độ tăng trưởng": "15%",
  },
  {
    "Danh mục": "Sản phẩm C",
    "Doanh thu": 2000000,
    "Mức độ tăng trưởng": "20%",
  },
  {
    "Danh mục": "Sản phẩm D",
    "Doanh thu": 2500000,
    "Mức độ tăng trưởng": "25%",
  },
  {
    "Danh mục": "Sản phẩm E",
    "Doanh thu": 3000000,
    "Mức độ tăng trưởng": "30%",
  },
];

export default function Reports() {
  let number = 100000;
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
      <div
        style={{ maxHeight: "33.33vh", overflowY: "auto" }}
        className="flex w-full flex-row gap-5  py-5"
      >
        <Container title="Tổng quan">
          <div className="flex w-full flex-row justify-between gap-5">
            <div className="flex flex-col gap-2">
              <span>{formatPrice(number)}</span>
              <span className="font-['Inter'] text-sm font-normal leading-tight text-[#555555]">
                Tổng lợi nhuận
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span>{formatPrice(number)}</span>
              <span className="font-['Inter'] text-sm font-normal leading-tight text-[#DBA362]">
                Doanh thu
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span>{formatPrice(number)}</span>
              <span className="font-['Inter'] text-sm font-normal leading-tight text-[#845EBC]">
                Doanh số bán hàng
              </span>
            </div>
          </div>
        </Container>

        <div className="flex w-full flex-col gap-5 rounded-md bg-white p-5 shadow-md">
          <span className="mb-2 text-xl font-medium">
            Danh mục bán chạy nhất
          </span>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Danh mục</TableCell>
                  <TableCell>Doanh thu</TableCell>
                  <TableCell>Tăng trưởng </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row["Danh mục"]}</TableCell>
                    <TableCell>{row["Doanh thu"]}</TableCell>
                    <TableCell>{row["Mức độ tăng trưởng"]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        
      </div>
      <Container title="Lợi nhuận & doanh thu">
          <ReportLineChart data={linechart} />
        </Container>

       <Container title="Sản phẩm bán chạy nhất">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sản phẩm</TableCell>
                <TableCell>Mã sản phẩm</TableCell>
                <TableCell>Loại </TableCell>
                <TableCell>Số lượng còn lại</TableCell>
                <TableCell>Doanh thu</TableCell>
                <TableCell>Tăng trưởng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableReport.map((row)=>(
                <TableRow>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.code}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.revenue}</TableCell>
                  <TableCell>{row.growth}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
       </Container>

    </div>
  );
}
