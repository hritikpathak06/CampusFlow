"use client";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "blue" },
  { name: "Group B", value: 8, fill: "Yellow" },
];

export const StraightAnglePieChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={600}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className=" text-3xl font-bold">9.2</h1>
        <p className=" text-xs text-gray-300">of 10 max LTS</p>
      </div>
      <h2 className=" absolute font-medium bottom-16 left-0 right-0 m-auto text-center ">
            1st semester - 2nd semester
      </h2>
    </>
  );
};
