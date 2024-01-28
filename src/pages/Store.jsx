//Package
import { useEffect, useState } from "react";
import { ToastContainer, } from 'react-toastify';

import { RotatingSquare } from "react-loader-spinner";
import { FaShoppingBag } from "react-icons/fa";
//Components
import Cart from "../components/Cart";
import Category from "../components/Category";
import SearchCart from "../components/SearchCart";
//Hooks
import useShoppingCarts from "../hooks/useShoppingCarts";
import { useSearchParams } from "react-router-dom";

function Store() {
  const products = useShoppingCarts();
  const [filterProduct, setFilterProduct] = useState(products);
  const [searchProduct, setSearchProduct] = useState("");
  const [categoryProcust, setCategoryProduct] = useState("all");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    setSearchParams(query);
  }, [query]);

  useEffect(() => {
    let filteredItems = products;
    if (categoryProcust !== "all") {
      filteredItems = products.filter(
        (product) => product.category === categoryProcust
      );
    }

    filteredItems = filteredItems.filter((product) =>
      product.title.toLowerCase().includes(searchProduct.toLowerCase())
    );

    setFilterProduct(filteredItems);
  }, [searchProduct, products, categoryProcust]);

  return (
    <div className="container mx-auto min-h-screen mt-4 px-2 lg:px-8">
      <h1 className="flex justify-center items-center my-5 text-tl dark:text-td font-bold uppercase text-base lg:text-2xl">
        <FaShoppingBag /> jewel online shop
      </h1>
      <SearchCart
        setSearchProduct={setSearchProduct}
        query={query}
        setQuery={setQuery}
      />
      <div className="flex flex-row-reverse justify-between px-4 gap-3 p-1">
        <div className="w-2/5 md:w-1/5">
          <Category
            setCategoryProduct={setCategoryProduct}
            query={query}
            setQuery={setQuery}
          />
        </div>
        <div className="w-3/5 md:w-4/5">
          {products.length === 0 && (
            <RotatingSquare
              visible={true}
              height="100"
              width="100"
              color="#d946ef"
              ariaLabel="rotating-square-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {products.length === 20 &&
              filterProduct.map((item) => <Cart key={item.id} data={item} />)}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Store;
