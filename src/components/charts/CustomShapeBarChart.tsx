"use client";

import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

// Custom Shape for Bars
const CustomBar = (props: any) => {
  const { x, y, width, height, fill, stroke } = props;
  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      radius={[5, 5, 0, 0]} // Rounded top corners
    />
  );
};

const CustomShapeBarChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      {/* Title */}
      <div className="mb-4">
        <h1 className="text-lg font-bold text-center">
          Custom Shape Bar Chart
        </h1>
      </div>

      {/* Chart */}
      <div className="h-90">
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              shape={<CustomBar fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              shape={<CustomBar fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">Data Source: Example</p>
      </div>
    </div>
  );
};

export default CustomShapeBarChart;
