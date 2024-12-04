import SaerchBar from "@/components/shared/SaerchBar";
import Table from "@/components/shared/Table";
import TablePagination from "@/components/shared/TablePagination";
import {  FilterIcon, PlusIcon, SortAscIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className=" flex justify-between">
        <h1 className=" text-lg font-semibold hidden md:block">All Teachers</h1>
        <div className=" flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <SaerchBar />
          <div className=" flex items-center gap-4 self-end">
            <button className=" w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
              <FilterIcon className="h-4 w-4" />
            </button>
            <button className=" w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
              <SortAscIcon className="h-4 w-4" />
            </button>
            <button className=" w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      {/* List */}
      <div>
        <Table/>
      </div>
      {/* Pagination */}
      <div>
        <TablePagination/>
      </div>
    </div>
  );
};

export default page;
