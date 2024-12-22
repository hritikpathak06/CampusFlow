"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { teacherSchema } from "@/validations/TeacherValidation";

type TypeProps = "create" | "edit";

interface Teacher {
  type: TypeProps;
  data?: any;
}

const TeacherForm = ({ type, data }: Teacher) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(teacherSchema),
    defaultValues: data, 
  });

  const onSubmit = handleSubmit((formData) => {
    console.log("Form Submitted!"); // Check if this logs
    console.log("Submitted Data:", formData);
  });

  return (
    <>
      <form
        className="flex flex-col gap-8"
        onSubmit={onSubmit}
      >
        <h1 className="text-xl font-semibold">
          {type === "create" ? "Create a New Teacher" : "Edit Teacher Details"}
        </h1>

        {/* Authentication Information */}
        <span className="text-xs text-gray-400 font-medium">
          Authentication Information
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              {...register("username")}
              placeholder="Username"
              className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full"
            />
            {errors.username?.message && (
              <p className="text-red-600 text-xs">
                {errors.username.message as string}
              </p>
            )}
          </div>
          <div>
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full"
            />
            {errors.email?.message && (
              <p className="text-red-600 text-xs">
                {errors.email.message as string}
              </p>
            )}
          </div>
        </div>
        <div>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full"
          />
          {errors.password?.message && (
            <p className="text-red-600 text-xs">
              {errors.password.message as string}
            </p>
          )}
        </div>

        {/* Personal Information */}
        <span className="text-xs text-gray-400 font-medium">
          Personal Information
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              {...register("firstname")}
              placeholder="First Name"
              className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full"
            />
            {errors.firstname?.message && (
              <p className="text-red-600 text-xs">
                {errors.firstname.message as string}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("lastname")}
              placeholder="Last Name (Optional)"
              className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full"
            />
            {errors.lastname?.message && (
              <p className="text-red-600 text-xs">
                {errors.lastname.message as string}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              {...register("phone")}
              placeholder="Phone Number"
              className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full"
            />
            {errors.phone?.message && (
              <p className="text-red-600 text-xs">
                {errors.phone.message as string}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              {...register("address")}
              placeholder="Address"
              className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full"
            />
            {errors.address?.message && (
              <p className="text-red-600 text-xs">
                {errors.address.message as string}
              </p>
            )}
          </div>
        </div>
        <div>
          <input
            type="date"
            {...register("birthday")}
            placeholder="Birthday"
            className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full"
          />
          {errors.birthday?.message && (
            <p className="text-red-600 text-xs">
              {errors.birthday.message as string}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="p-2 bg-green-500 w-full md:w-1/2 mx-auto border-gray-300 border-2 rounded-md"
        >
          {type === "create" ? "Create" : "Update"}
        </button>
      </form>
    </>
  );
};

export default TeacherForm;
