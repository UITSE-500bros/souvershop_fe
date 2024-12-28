
import React from "react";
import {Tooltip, CartesianGrid, Legend, XAxis, YAxis, LineChart, Line, ResponsiveContainer } from "recharts";

export default function LineChartComponent({data}:any) {
  return (
    <ResponsiveContainer height={300} width='100%'>
    <LineChart
     
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Đặt hàng" stroke="#8884d8" />
      <Line type="monotone" dataKey="Giao hàng" stroke="#82ca9d" />
    </LineChart>
    </ResponsiveContainer>
  );
}
