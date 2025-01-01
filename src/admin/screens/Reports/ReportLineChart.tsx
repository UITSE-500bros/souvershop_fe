import {
  Tooltip,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function ReportLineChart({ data }: any) {
  return (
    <ResponsiveContainer height={300} width="100%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Doanh thu" stroke="#8884d8" />
        <Line type="monotone" dataKey="Lợi nhuận" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
