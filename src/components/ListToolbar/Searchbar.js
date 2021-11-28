import React from "react";

function Searchbar({ handleSearch }) {
  return (
    <div className="relative border-b-2 focus-within:border-blue-500 ml-10">
      <input
        type="text"
        name="username"
        placeholder=" "
        className="block w-full appearance-none focus:outline-none"
        onChange={handleSearch}
      />
      <label htmlFor="username" className="absolute top-0">
        Search...
      </label>
    </div>
  );
}

export default Searchbar;
