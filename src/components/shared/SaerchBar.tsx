import { SearchIcon } from "lucide-react";
import React from "react";

const SaerchBar = () => {
  return (
    <div>
      <div className=" flex  p-2 md:items-center rounded-md gap-3 border-2 bg-white">
        <SearchIcon className="h-4 w-4" />
        <input
          type="text"
          placeholder="Search here..."
          className=" focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SaerchBar;
