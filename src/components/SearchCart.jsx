import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchCart({ setSearchProduct }) {
  const [searchInput, setSearchInput] = useState("");

  const searchHandler = () => {
    setSearchProduct(searchInput.trim().toLowerCase());
  };

  return (
    <div className="my-3 flex justify-start items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-72 px-2 py-1 border-2 border-cyan-700 rounded-md outline-none valid:text-cyan-700 placeholder:text-cyan-700"
      />
      <button
        onClick={searchHandler}
        className="ml-3 bg-cyan-700 rounded-md text-white font-semibold py-1 px-2 border-2 border-cyan-700 hover:bg-white hover:text-cyan-700">
        <FaSearch size={"24px"} />
      </button>
    </div>
  );
}

export default SearchCart;
