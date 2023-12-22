function Category({ setCategoryProduct }) {
  const categoryHandler = (e) => {
    e.target.tagName === "BUTTON" &&
      setCategoryProduct(e.target.innerText.toLowerCase());
  };
  return (
    <div
      onClick={categoryHandler}
      className="w-2/5 md:w-1/5 h-fit sticky top-4 p-2 bg-cyan-700 flex flex-col items-start rounded-md text-white font-semibold text-sm md:text-md lg:text-lg">
      <button className="py-2">All</button>
      <button className="py-2">women's clothing</button>
      <button className="py-2">electronics</button>
      <button className="py-2">jewelery</button>
      <button className="py-2">men's clothing</button>
    </div>
  );
}

export default Category;
