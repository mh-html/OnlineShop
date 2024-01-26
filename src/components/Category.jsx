//Package
import { BiCategory } from "react-icons/bi";
import { configQuery } from "../utils/configQuery";

function Category({ setCategoryProduct, query, setQuery }) {
  const categoryHandler = (e) => {
    const categorySelected = e.target.innerText.toLowerCase();
    if (e.target.tagName === "LI") {
      setCategoryProduct(categorySelected);
      setQuery(configQuery({ ...query }, { category: categorySelected }));
    }
  };

  return (
    <div
      onClick={categoryHandler}
      className="h-fit sticky top-4 p-2 bg-tl dark:bg-td flex flex-col items-start rounded-md text-bl dark:text-bd font-semibold text-xs md:text-base">
      <p className="font-bold flex items-center mb-3">
        <BiCategory /> Categories
      </p>
      <ul className="*:cursor-pointer *:py-1">
        <li>All</li>
        <li>women's clothing</li>
        <li>electronics</li>
        <li>jewelery</li>
        <li>men's clothing</li>
      </ul>
    </div>
  );
}

export default Category;
