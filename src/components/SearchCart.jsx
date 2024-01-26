//Package
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { configQuery } from "../utils/configQuery";

function SearchCart({ setSearchProduct, query, setQuery }) {
  const [searchInput, setSearchInput] = useState("");

  const searchHandler = () => {
    const searchText = searchInput.trim().toLowerCase();
    setSearchProduct(searchText);
    setQuery(configQuery({ ...query }, { search: searchText }));
  };

  return (
    <div className="my-3 flex justify-start items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-60 md:w-72 px-2 py-1 border-2 bg-bl dark:bg-bd border-tl dark:border-td
         text-tl dark:text-td rounded-md focus:outline-none valid:text-tl
         dark:placeholder:text-td placeholder:text-tl dark:valid:text-td"
      />
      <button
        onClick={searchHandler}
        className="ml-3 bg-tl rounded-md text-white font-semibold py-1 px-2 border-2 border-tl hover:bg-white hover:text-tl">
        <FaSearch size={"24px"} />
      </button>
    </div>
  );
}

export default SearchCart;
