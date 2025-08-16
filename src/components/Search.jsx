import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

function Search() {
  return (
    <div className="bg-cyan-100 py-6 px-4 shadow-md rounded-md  mx-auto">
      <div className="flex flex-col items-center space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">STORE</h2>

        {/* Search Bar */}
        <div className="flex items-center w-max bg-white rounded-md border border-gray-300 px-3 py-2 space-x-3">
          <CiSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search products, categories..."
            className="flex-1 focus:outline-none"
          />
          <FiShoppingBag className="text-xl text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Search;
