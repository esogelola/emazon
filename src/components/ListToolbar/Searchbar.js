import React from "react";

function Searchbar() {
  return (
    <div class="relative border-b-2 focus-within:border-blue-500 ml-10">
      <input
        type="text"
        name="username"
        placeholder=" "
        class="block w-full appearance-none focus:outline-none"
      />
      <label for="username" class="absolute top-0">
        Search...
      </label>
    </div>
  );
}

export default Searchbar;
