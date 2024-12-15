import SaerchBar from "@/components/shared/SaerchBar";
import Table from "@/components/shared/Table";
import TablePagination from "@/components/shared/TablePagination";
import { classesData } from "@/lib/dummyData";
import {
  DeleteIcon,
  FilterIcon,
  PlusIcon,
  SortAscIcon,
  ViewIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface ColumnTypes {
  header: string;
  accessor: string;
  className?: string;
}

interface Classes {
  id: string | number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
}
const parentsColumns: ColumnTypes[] = [
  { header: "Class Name", accessor: "name" },
  { header: "Capacity", accessor: "capacity" },
  { header: "Grade", accessor: "grade" },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  { header: "Actions", accessor: "actions", className: "hidden lg:table-cell" },
];

const renderParentsRow = (item: Classes) => (
  <>
    <tr className=" border-b border-gray-200">
      <td className="flex items-center gap-2">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.id}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
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
      <div className=" flex justify-between">
        <h1 className=" text-lg font-semibold hidden md:block">All Classes</h1>
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
      <div>
        <Table
          columns={parentsColumns}
          renderRow={renderParentsRow}
          data={classesData}
        />
      </div>
      <div>
        <TablePagination />
      </div>
    </div>
  );
};

export default page;
