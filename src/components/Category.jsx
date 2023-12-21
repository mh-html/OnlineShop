function Category({ setCategoryProduct }) {
  const categoryHandler = (e) => {
    e.target.tagName === "BUTTON" &&
      setCategoryProduct(e.target.innerText.toLowerCase());
  };
  return (
    <div
      onClick={categoryHandler}
      className="w-1/4 p-2 bg-yellow-500 flex flex-col items-start">
      <button>All</button>
      <button>women's clothing</button>
      <button>electronics</button>
      <button>jewelery</button>
      <button>men's clothing</button>
    </div>
  );
}

export default Category;
