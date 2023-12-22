import { BiCategory } from "react-icons/bi";

function Category({ setCategoryProduct }) {
  const categoryHandler = (e) => {
    e.target.tagName === "BUTTON" &&
      setCategoryProduct(e.target.innerText.toLowerCase());
  };
  return (
    <ul
      onClick={categoryHandler}
      className="w-2/5 md:w-1/5 h-fit sticky top-4 p-2 bg-cyan-700 flex flex-col items-start rounded-md text-white font-semibold text-sm md:text-md">
      <p className="font-bold flex items-center mb-3">
        <BiCategory /> Categories
      </p>
      <li className="cursor-pointer py-1">All</li>
      <li className="cursor-pointer py-1">women's clothing</li>
      <li className="cursor-pointer py-1">electronics</li>
      <li className="cursor-pointer py-1">jewelery</li>
      <li className="cursor-pointer py-1">men's clothing</li>
    </ul>
  );
}

export default Category;
