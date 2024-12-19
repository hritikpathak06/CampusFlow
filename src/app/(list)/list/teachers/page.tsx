import FormModal from "@/components/mutations/FormModal";
import SaerchBar from "@/components/shared/SaerchBar";
import Table from "@/components/shared/Table";
import TablePagination from "@/components/shared/TablePagination";
import { teachersData } from "@/lib/dummyData";
import {
  DeleteIcon,
  FilterIcon,
  SortAscIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ColumnTypes {
  header: string;
  accessor: string;
  className?: string;
}

interface Teacher {
  id: string | number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  subjects?: string[];
  classes?: string[];
  address?: string;
}

const columns: ColumnTypes[] = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher Id",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item: Teacher) => {
  return (
    <tr className="">
      <td className=" flex items-center gap-2">
        <Image
          src={item.photo}
          width={40}
          height={40}
          alt={item.name}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className=" flex flex-col">
          <h3 className=" font-semibold">{item.name}</h3>
          <p className=" text-sm text-gray-500">{item.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects?.join(",")}</td>
      <td className="hidden md:table-cell">{item.classes?.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td className=" flex items-center gap-4">
        <Link
          href={`/list/teachers/${item.id}`}
          className=" p-2 flex items-center justify-center rounded-full bg-sky-300"
        >
          <FormModal type="edit" table="teachers" />
        </Link>
        <button className=" p-2  flex items-center justify-center rounded-full bg-yellow-200">
        <FormModal type="delete" table="teachers" />
        </button>
      </td>
    </tr>
  );
};

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
            <FormModal type="create" table="teachers" />
          </div>
        </div>
      </div>
      {/* List */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={teachersData} />
      </div>
      {/* Pagination */}
      <div>
        <TablePagination />
      </div>
    </div>
  );
};

export default page;
