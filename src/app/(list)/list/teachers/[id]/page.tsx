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
            <div className="bg-sky-300 py-6 px-4 rounded-md flex-1 "></div>
            {/* Small Card */}
            <div className="flex-1 "></div>
          </div>

          {/* Bottom */}

          <div className="">Schedule</div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-1/3">r</div>
      </div>
    </>
  );
};

export default page;
