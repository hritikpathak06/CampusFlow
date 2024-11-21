"use client";
import { GroupIcon, MoreVertical, PersonStanding } from "lucide-react";
import React from "react";
import {
  RadialBarChart as RechartsRadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#8884d8",
  },
  {
    name: "Boys",
    count: 80,
    fill: "#878421",
  },
];

const CustomRadialBarChart = () => {
  const total = data.reduce((sum, item) => sum + item.count, 0);
  const percentages = data.map((item) => ({
    ...item,
    percentage: ((item.count / total) * 100).toFixed(1),
  }));

  return (
    <div className="bg-white rounded-xl p-4 h-full w-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Students</h1>
        <MoreVertical className="h-6 w-6" />
      </div>

      <div className=" relative w-full h-64 mb-4">
        <ResponsiveContainer>
          <RechartsRadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="100%"
            barSize={100}
            data={percentages}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RechartsRadialBarChart>
        </ResponsiveContainer>
        <PersonStanding className=" absolute top-[40%] left-[40%] h-12 w-12" />
      </div>

      <div className="flex justify-center gap-16">
        {percentages.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-1">
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: item.fill }}
            ></div>
            <h1 className="font-bold">{item.count}</h1>
            <h2 className="text-sm text-gray-500">
              {item.name} [{item.percentage}%]
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomRadialBarChart;
