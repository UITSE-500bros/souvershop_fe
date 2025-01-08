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
import React, { useEffect } from "react";
import ReportLineChart from "./ReportLineChart";
import { linechart, tableReport } from "./fakedata";
import { BestSeller } from "./model/BestSeller";
import axiosInstance from "@/services/AxiosInstance";
import { BestCategory } from "./model/BestCaTegory";

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
  const [bestSeller, setBestSeller] = React.useState<BestSeller[]>([]);
  const [bestCategory, setBestCategory] = React.useState<BestCategory[]>([]);
  const fetchBestSeller = async () => {
    try {
      const res = await axiosInstance.get("report/best_sallers");
      setBestSeller(res.data);
    } catch (error) {
      console.error("Error fetching best seller data:", error);
    }
  };
  const fetchBestCategory = async () => {
    try {
      const res = await axiosInstance.get("report/category_report");
      setBestCategory(res.data);
    } catch (error) {
      console.error("Error fetching best category data:", error);
    }
  };
  useEffect(() => {
    fetchBestCategory();
    fetchBestSeller();
  }, []);
  console.log(bestCategory);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
      <div
        style={{ maxHeight: "33.33vh", overflowY: "auto" }}
        className="flex w-full flex-row gap-5 py-5"
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
                  <TableCell>
                    Tổng sản phẩm <br /> đã bán{" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bestCategory.map((row) => (
                  <TableRow>
                    <TableCell>{row.category_name}</TableCell>
                    <TableCell>{row.total_revenue}</TableCell>
                    <TableCell>{row.total_sold_quantity}</TableCell>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {bestSeller.map((row) => (
                <TableRow>
                  <TableCell>{row.product_name}</TableCell>
                  <TableCell>{row.product_id}</TableCell>
                  <TableCell>{row.product_name}</TableCell>
                  <TableCell>{row.product_selling_price}</TableCell>
                  <TableCell>{row.total_revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}
