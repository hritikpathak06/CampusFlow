import CustomizedLabelLineChart from "@/components/charts/CustomizedLabelLineChart";
import CustomShapeBarChart from "@/components/charts/CustomShapeBarChart";
import CustomRadialBarChart from "@/components/charts/RadialBarChart";
import EventCalendar from "@/components/dashboard/EventCalendar";
import UserCard from "@/components/dashboard/UserCard";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" flex p-4 gap-4 flex-col md:flex-row">
        {/* Left */}
        <div className=" w-full lg:w-2/3 flex flex-col gap-8  ">
          <div className=" flex gap-4 justify-between flex-wrap">
            <UserCard type="student" />
            <UserCard type="parent" />
            <UserCard type="teacher" />
            <UserCard type="staff" />
          </div>
          {/* Middle charts */}
          <div className=" flex gap-4 flex-col lg:flex-row">
            {/* Count chart */}
            <div className="w-full lg:w-1/3 h-[450px]">
              <CustomRadialBarChart />
            </div>
            {/* AttendenceChart */}
            <div className="w-full lg:w-2/3 h-[450px]">
              <CustomShapeBarChart />
            </div>
          </div>
          <div className=" mt-5 bg-white">
            <CustomizedLabelLineChart />
          </div>
          {/* Bottom charts */}
          <div className=""></div>
        </div>
        {/* Right */}
        <div className=" w-full lg:w-1/3">
          <div className=" bg-white p-3 h-[450px]">
            <EventCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
