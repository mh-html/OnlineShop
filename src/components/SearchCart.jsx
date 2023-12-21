function SearchCart() {
  const searchHandler = () => {
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
      />
      <button onClick={searchHandler}>OK</button>
    </div>
  );
}

export default SearchCart;
