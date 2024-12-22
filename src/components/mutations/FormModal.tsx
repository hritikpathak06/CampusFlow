"use client";
import { DeleteIcon, Edit2Icon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import TeacherForm from "../forms/TeacherForm";

type TableType =
  | "teachers"
  | "student"
  | "parent"
  | "class"
  | "subjects"
  | "lesson"
  | "exam"
  | "assignment";
type TypeProps = "create" | "edit" | "delete";

interface FormModalTypes {
  table: TableType;
  type: TypeProps;
  data?: any;
  id?: number | string;
}

const FormModal = ({ table, type, data, id }: FormModalTypes) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-yellow-600"
      : type === "edit"
      ? "bg-sky-600"
      : "bg-red-500";

  const [open, setOpen] = useState<boolean>(false);

  const Form = () => {
    return (
      <>
        {type === "delete" ? (
          <form className=" p-4 flex flex-col gap-4">
            <span className=" text-center font-medium">
              All data will be lost. Are you sure to delete this {table}?
            </span>
            <button className=" w-max mx-auto bg-red-600 text-white py-2 px-4 rounded-md border-none">
              Delete
            </button>
          </form>
        ) : (
         <TeacherForm type="create"/>
        )}
      </>
    );
  };

  return (
    <>
      <div>
        <button
          className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
          onClick={() => setOpen(true)}
        >
          {type === "create" ? (
            <PlusIcon className=" h-6 w-6" />
          ) : type === "edit" ? (
            <Edit2Icon className="h-5 w-5" />
          ) : (
            <DeleteIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <div
          className=" w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          <div
            className=" bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%]"
            onClick={(e) => e.stopPropagation()}
          >
            <Form />
            <div className=" absolute top-0 right-0">
              <DeleteIcon
                className="h-6 w-6 cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
