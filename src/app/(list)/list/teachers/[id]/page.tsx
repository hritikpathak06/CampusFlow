import { StraightAnglePieChart } from "@/components/charts/StraightAnglePieChart";
import Announcements from "@/components/dashboard/Announcements";
import { BigCalendar } from "@/components/students/BigCalendar";
import {
  BoldIcon,
  BrainCircuitIcon,
  Clapperboard,
  LucideSalad,
  Mail,
  PhoneCallIcon,
  SignalMedium,
  Timer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex p-4 flex-1 flex-col gap-4 md:flex-row">
        {/* Left */}
        <div className=" w-full xl:w-2/3">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* User Info Card */}
            <div className="bg-red-300 gap-4 flex  py-6 px-4 rounded-md flex-1 ">
              <div className="w-1/3">
                <Image
                  src={
                    "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  }
                  alt="teacher_logo"
                  height={144}
                  width={144}
                  className=" w-36 h-36 rounded-full object-cover"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-between gap-4">
                <h1 className=" text-xl font-semibold">John Doe</h1>
                <p className=" text-sm text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. !
                </p>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                  <div className="w-full md:w-1/3 flex items-center gap-2">
                    <BoldIcon />
                    <span>A+</span>
                  </div>
                  <div className="w-full md:w-1/3 flex items-center gap-2">
                    <Timer />
                    <span>January, 2025</span>
                  </div>
                  <div className="w-full md:w-1/3 flex items-center gap-2">
                    <Mail />
                    <span>john@gmail.com</span>
                  </div>
                  <div className="w-full md:w-1/3 flex items-center gap-2">
                    <PhoneCallIcon />
                    <span>9508318852</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Small Card */}
            <div className="flex-1 flex gap-4 justify-between flex-wrap ">
              {/* Card */}
              <div className=" w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <SignalMedium />
                <div className="">
                  <h1 className=" text-xl font-bold">90%</h1>
                  <span className=" text-sm text-gray-400">Attendence</span>
                </div>
              </div>

              <div className=" w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Clapperboard />
                <div className="">
                  <h1 className=" text-xl font-bold">2</h1>
                  <span className=" text-sm text-gray-400">Classes</span>
                </div>
              </div>

              <div className=" w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <BrainCircuitIcon />
                <div className="">
                  <h1 className=" text-xl font-bold">6</h1>
                  <span className=" text-sm text-gray-400">Branches</span>
                </div>
              </div>

              <div className=" w-full bg-white p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <LucideSalad />
                <div className="">
                  <h1 className=" text-xl font-bold">5</h1>
                  <span className=" text-sm text-gray-400">Lessons</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-4 bg-white rounded-md p-4 h-[580px]">
            <h1 className=" text-xl font-extrabold">Teacher &apos; Schedule</h1>
            <BigCalendar />
          </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
          <div className=" bg-white p-4 rounded-md">
            <h1 className=" text-xl font-semibold">Shortcuts</h1>
            <div className=" mt-4 flex gap-4 flex-wrap text-sm text-gray-400">
              <Link className=" p-2 rounded-md bg-sky-300" href={"/"}>Teacher Classes</Link>
              <Link className=" p-2 rounded-md bg-red-300" href={"/"}>Teacher Students</Link>
              <Link className=" p-2 rounded-md bg-yellow-300" href={"/"}>Teacher Exams</Link>
              <Link className=" p-2 rounded-md bg-pink-300" href={"/"}>Teacher Lessons</Link>
              <Link className=" p-2 rounded-md bg-green-300" href={"/"}>Teacher Assignments</Link>
            </div>
          </div>

             <div className=" bg-white p-4 rounded-md h-80 relative">
                 <h1 className=" text-xl font-semibold">Performance</h1>
                 <StraightAnglePieChart/>
             </div>

          <Announcements />
        </div>
      </div>
    </>
  );
};

export default page;
