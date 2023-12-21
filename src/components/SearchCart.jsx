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
      />
      <button onClick={searchHandler}>OK</button>
    </div>
  );
}

export default SearchCart;
