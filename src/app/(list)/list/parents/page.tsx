import SaerchBar from "@/components/shared/SaerchBar";
import Table from "@/components/shared/Table";
import TablePagination from "@/components/shared/TablePagination";
import { parentsData } from "@/lib/dummyData";
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

interface Parents {
  id: string | number; // Unique identifier for the teacher
  name: string; // Teacher's name
  students: string[]; // List of student names
  email: string; // Teacher's email address
  phone: string; // Teacher's phone number
  address: string; // Teacher's address
}
const parentsColumns: ColumnTypes[] = [
  { header: "Name", accessor: "name" },
  { header: "Students", accessor: "students" },
  { header: "Email", accessor: "email" },
  { header: "Phone", accessor: "phone", className: "hidden md:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
];

const renderParentsRow = (item: Parents) => (
  <>
    <tr className="">
      <td className="flex items-center gap-2">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.email}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
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
        <h1 className=" text-lg font-semibold hidden md:block">All Parents</h1>
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
          data={parentsData}
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
