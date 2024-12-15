import SaerchBar from "@/components/shared/SaerchBar";
import Table from "@/components/shared/Table";
import TablePagination from "@/components/shared/TablePagination";
import { parentsData, subjectsData } from "@/lib/dummyData";
import {
  DeleteIcon,
  FilterIcon,
  PlusIcon,
  SortAscIcon,
  ViewIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ColumnTypes {
  header: string;
  accessor: string;
  className?: string;
}

interface Lessons {
  id: string | number;
  name: string;
  teachers: string[];
}
const parentsColumns: ColumnTypes[] = [
  { header: "Teacher Id", accessor: "teacherid" },
  { header: "Subject Name", accessor: "teacher_name" },
  { header: "Teachers", accessor: "teachers" },
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderParentsRow = (item: Lessons) => (
  <>
    <tr className=" border-b border-gray-200">
      <td className="flex items-center gap-2">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.id}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(",")}</td>

      <td className="flex items-center gap-4">
        <Link
          href={`/list/students/${item.id}`}
          className="p-2 flex items-center justify-center rounded-full bg-sky-300"
        >
          <ViewIcon className="h-5 w-5" />
        </Link>
        <button className="p-2 flex items-center justify-center rounded-full bg-yellow-200">
          <DeleteIcon className="h-5 w-5" />
        </button>
      </td>
    </tr>
  </>
);

const page = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className=" flex justify-between">
        <h1 className=" text-lg font-semibold hidden md:block">All Lessons</h1>
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
        <Table
          columns={parentsColumns}
          renderRow={renderParentsRow}
          data={subjectsData}
        />
      </div>
      {/* Pagination */}
      <div>
        <TablePagination />
      </div>
    </div>
  );
};

export default page;
