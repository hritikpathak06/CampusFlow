import { MoreVerticalIcon } from "lucide-react";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className=" rounded-2xl odd:bg-purple-300 even:bg-pink-300 p-4 flex-1 min-w-[130px] ">
      <div className=" flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/2025
        </span>
        <MoreVerticalIcon className="h-4 w-4 cursor-pointer" />
      </div>
      <h1 className=" text-2xl font-semibold my-4">1,234</h1>
      <h2 className=" text-sm font-medium capitalize">{type}</h2>
    </div>
  );
};

export default UserCard;
