import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Container from "../../components/Container/Container";
import BarChartComponent from "./BarChartComponent";
import { dataBarchart, dataLineChart, tableData } from "./Fakedata";
import IconGroup from "./IconGroup";
import LineChartComponent from "./LineChartComponent";
import { useEffect, useState } from "react";
import axiosInstance from "@/services/AxiosInstance";
import { LowStockItem } from "@/models/LowStockItem";
import { TableItem } from "./model/TableItem";

export default function AdminDashboard() {
  const [reportData, setReportData] = useState({
    productOverview: {
      product_count: "",
      category_count: "",
    },
    revenueOverview: {
      total_revenue: "",
      total_profit: "",
      total_sales: "",
      total_cost: "",
    },
    stock: {
      total_products: "",
      total_shipping_products: "",
    },
    buy: {
      total_purchase: "",
      total_expense: "",
      total_canceled: "",
      total_return: "",
    },
  });
  const [table, setTable] = useState<TableItem[]>([]);
  const [lowStock, setLowStock] = useState<LowStockItem[]>([]);
  const fetchTableData = async () => {
    try {
      const res = await axiosInstance.get("report/sales_product");
      setTable(res.data);
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  }
  const fetchLowStock = async () => {
    try {
      const res = await axiosInstance.get("report/low-stock");
      setLowStock(res.data);
    } catch (error) {
      console.error("Error fetching low stock data:", error);
    }
  };

  const fetchBuyReport = async () => {
    try {
      const res = await axiosInstance.get("report/buyreport");
      setReportData((prev) => ({ ...prev, buy: res.data }));
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  const fetchRevenueData = async () => {
    try {
      const res = await axiosInstance.get("report/revenue");
      setReportData((prev) => ({ ...prev, revenueOverview: res.data }));
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };
  const fetchProductOverviewData = async () => {
    try {
      const res = await axiosInstance.get("report/products");
      setReportData((prev) => ({ ...prev, productOverview: res.data }));
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  const fetchStockData = async () => {
    try {
      const res = await axiosInstance.get("report/summary-stock");
      setReportData((prev) => ({ ...prev, stock: res.data }));
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  console.log(reportData);

  useEffect(() => {
    fetchRevenueData();
    fetchProductOverviewData();
    fetchLowStock();
    fetchBuyReport();
    fetchStockData();
    fetchTableData();
  }, []);
  console.log(table);

  return (
    <>
    <div className="grid grid-cols-[2fr_1fr] grid-rows-[1fr_1_fr_2fr_2fr] place-items-center gap-5">
      <Container title="Tổng quan doanh số">
        <IconGroup
          icon="sales"
          label="Doanh số"
          value={reportData.revenueOverview.total_sales}
        />
        <IconGroup
          icon="revenue"
          label="Doanh thu"
          value={reportData.revenueOverview.total_revenue}
        />
        <IconGroup
          icon="profit"
          label="Lợi nhuận"
          value={reportData.revenueOverview.total_profit}
        />
        <IconGroup
          icon="cost"
          label="Chi phí"
          value={reportData.revenueOverview.total_cost}
          hasBorder={false}
        />
      </Container>

      {/*Stock */}
      <Container title="Kho hàng">
        <IconGroup
          label="Số lượng hàng tồn"
          value={reportData.stock.total_products}
          icon="quantity"
        />
        <IconGroup
          label="Đang vận chuyển"
          value={reportData.stock.total_shipping_products}
          icon="onTheWay"
          hasBorder={false}
        />
      </Container>

      {/*Purchase Overview */}
      <Container title="Tổng quan mua hàng">
        <IconGroup
          label="Mua"
          value={reportData.buy.total_purchase}
          icon="buy"
        />
        <IconGroup
          label="Bán"
          value={reportData.buy.total_expense}
          icon="c ost"
        />
        <IconGroup
          label="Hủy bỏ"
          value={
            reportData.buy.total_canceled ? reportData.buy.total_canceled : "0"
          }
          icon="cancel"
        />
        <IconGroup
          label="Trả về"
          value={
            reportData.buy.total_return ? reportData.buy.total_return : "0"
          }
          icon="profit"
        />
      </Container>

      {/*Product overview*/}
      <Container title="Tóm tắt sản phẩm">
        <IconGroup
          label="Số lượng sản phẩm"
          value={reportData.productOverview.product_count}
          icon="quantity"
        />
        <IconGroup
          label="Số lượng danh mục"
          value={reportData.productOverview.category_count}
          icon="categories"
          hasBorder={false}
        />
      </Container>
      {/* Bar chart */}
      <Container title="Mua & Bán">
        <BarChartComponent data={dataBarchart} />
      </Container>
      {/* line chart */}
      <Container title="Tóm tắt đơn hàng">
        <LineChartComponent data={dataLineChart} />
      </Container>
      {/* table */}
      <Container title="Đã bán">
        <TableContainer sx={{width: "100%"}}>
          <TableHead>
            <TableRow>
              <TableCell>Tên</TableCell>
              <TableCell align="right">Số lượng bán</TableCell>
              <TableCell align="right">Số lượng còn lại</TableCell>
              <TableCell align="right">Giá</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map((row) => (
              <TableRow key={row.product_name}>
                <TableCell component="th" scope="row">
                  {row.product_name}
                </TableCell>
                <TableCell align="right">{row.total_sold_quantity}</TableCell>
                <TableCell align="right">{row.stock_remaining}</TableCell>
                <TableCell align="right">{row.total_revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Container>

      {/*Low stock */}
      <Container title="Hàng tồn kho thấp">
        {lowStock.map((item) => (
          <div
            key={item.product_id}
            className="flex w-full items-center justify-evenly gap-4"
          >
            <img
              className="h-[70px] w-[60px] rounded"
              src={item.product_image[0]}
            />

            <div className="flex h-[82px] flex-grow flex-col items-start justify-start gap-1">
              <div className="overflow-y-hidden text-ellipsis font-['Inter'] text-base font-semibold leading-normal text-[#383e49]">
                {item.product_name}
              </div>
              <div className="font-['Inter'] text-sm font-normal leading-tight text-[#667085]">
                Số lượng còn lại: {item.product_quantity}
                <br />
              </div>
            </div>

            <div className="inline-flex h-[22px] items-center justify-center gap-1 rounded-2xl bg-[#feeceb] py-0.5 pl-1.5 pr-2">
              <div className="text-center font-['Inter'] text-xs font-medium leading-[18px] text-[#aa3028]">
                Thấp
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
    </>
  );
}
