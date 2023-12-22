import { useState } from "react";

function SearchCart({ setSearchProduct }) {
  const [searchInput, setSearchInput] = useState("");

  const searchHandler = () => {
    setSearchProduct(searchInput.trim().toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-72 mb-3 px-2 py-1 border-2 border-cyan-700 rounded-md outline-none valid:text-cyan-700 placeholder:text-cyan-700"
      />
      <button
        onClick={searchHandler}
        className="ml-3 bg-cyan-700 rounded-md text-white font-semibold py-1 px-2 border-2 border-cyan-700 hover:bg-white hover:text-cyan-700">
        Search
      </button>
    </div>
  );
}

export default SearchCart;
