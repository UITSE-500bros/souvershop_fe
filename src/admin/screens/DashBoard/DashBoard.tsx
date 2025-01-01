import SalesIcon from "@/admin/assets/SalesIcon";
import RevenueIcon from "@/admin/assets/RevenueIcon";
import ProfitIcon from "@/admin/assets/ProfitIcon";
import CostIcon from "@/admin/assets/CostIcon";
import IconGroup from "./IconGroup";
import Container from "../../components/Container/Container";
import Quantity from "@/admin/assets/QuantityIcon";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./LineChartComponent";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { dataBarchart, dataLineChart, tableData } from "./Fakedata";

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-[2fr_1fr] grid-rows-[1fr_1_fr_2fr_2fr] place-items-center gap-5">
      <Container title="Tổng quan doanh số">
        <IconGroup Icon={SalesIcon} label="Doanh số" value={1000} />
        <IconGroup Icon={RevenueIcon} label="Doanh thu" value={2000} />
        <IconGroup Icon={ProfitIcon} label="Lợi nhuận" value={1500} />
        <IconGroup
          Icon={CostIcon}
          label="Chi phí"
          value={500}
          hasBorder={false}
        />
      </Container>

      {/*Stock */}
      <Container title="Kho hàng">
        <IconGroup label="Số lượng hàng tồn" value={869} Icon={Quantity} />
        <IconGroup
          label="Số lượng hàng tồn"
          value={869}
          Icon={Quantity}
          hasBorder={false}
        />
      </Container>

      {/*Purchase Overview */}
      <Container title="Tổng quan mua hàng">
        <IconGroup label="Mua" value={1000} Icon={CostIcon} />
        <IconGroup label="Trị giá" value={1000} Icon={CostIcon} />
        <IconGroup label="Hủy bỏ" value={1000} Icon={CostIcon} />
        <IconGroup label="Trả về" value={1000} Icon={CostIcon} />
      </Container>

      {/*Product overview*/}
      <Container title="Tóm tắt sản phẩm">
        <IconGroup label="Số lượng nhà cung cấp" value={869} Icon={Quantity} />
        <IconGroup
          label="Số lượng danh mục"
          value={869}
          Icon={Quantity}
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
      <Container title="Bảng">
        <TableContainer>
          <TableHead>
            <TableRow>
              <TableCell>Tên</TableCell>
              <TableCell align="right">Số lượng bán</TableCell>
              <TableCell align="right">Số lượng còn lại</TableCell>
              <TableCell align="right">Giá</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={row.Tên}
              >
                <TableCell component="th" scope="row">
                  {row.Tên}
                </TableCell>
                <TableCell align="right">{row["Số lượng bán"]}</TableCell>
                <TableCell align="right">{row["Số lượng còn lại"]}</TableCell>
                <TableCell align="right">{row['Giá']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Container>
    </div>
  );
}
