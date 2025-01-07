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

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-[2fr_1fr] grid-rows-[1fr_1_fr_2fr_2fr] place-items-center gap-5">
      <Container title="Tổng quan doanh số">
        <IconGroup icon="sales" label="Doanh số" value={1000} />
        <IconGroup icon="revenue" label="Doanh thu" value={2000} />
        <IconGroup icon="profit" label="Lợi nhuận" value={1500} />
        <IconGroup icon="cost" label="Chi phí" value={500} hasBorder={false} />
      </Container>

      {/*Stock */}
      <Container title="Kho hàng">
        <IconGroup label="Số lượng hàng tồn" value={869} icon="quantity"/>
        <IconGroup
          label="Đang vận chuyển"
          value={869}
          icon="onTheWay"
          hasBorder={false}
        />
      </Container>

      {/*Purchase Overview */}
      <Container title="Tổng quan mua hàng">
        <IconGroup label="Mua" value={1000} icon="buy" />
        <IconGroup label="Bán" value={2000} icon="c ost" />
        <IconGroup label="Hủy bỏ" value={1000} icon="cancel" />
        <IconGroup label="Trả về" value={1000} icon="profit" />
      </Container>

      {/*Product overview*/}
      <Container title="Tóm tắt sản phẩm">
        <IconGroup label="Số lượng nhà cung cấp" value={869} icon="suppliers" />
        <IconGroup
          label="Số lượng danh mục"
          value={869}
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
                <TableCell align="right">{row["Giá"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Container>
    </div>
  );
}
