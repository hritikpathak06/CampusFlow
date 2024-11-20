import {
  ChartBarIcon,
  MessageCircle,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between  p-4 md:border-b-2 border-0 bg-white">
      <div className=" hidden md:flex  p-2 md:items-center rounded-md gap-3 border-b-2 bg-[#F7F8FA]">
        <SearchIcon className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search here..."
          className=" focus:outline-none"
        />
      </div>

      <div className="flex gap-3 items-center :bg-green-400 w-full md:w-[30%] justify-between md:justify-end">
        <div className=" bg-white rounded-full cursor-pointer flex items-center justify-center">
          <MessageCircle />
        </div>
        <div className=" bg-white rounded-full cursor-pointer flex items-center justify-center">
          <ChartBarIcon />
        </div>
        <div className=" flex flex-col items-center cursor-pointer">
          {/* <span className=" text-xs leading-3 font-medium">John Doe</span>
          <span className=" text-[10px] text-gray-500">Admin</span> */}
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
