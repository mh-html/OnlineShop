//Package
import { useEffect, useState } from "react";
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
    <div className="container mx-auto mt-4 px-2 lg:px-8">
      <h1 className="flex justify-center items-center my-5 text-cyan-700 font-bold uppercase text-2xl">
        <FaShoppingBag /> jewel online shop
      </h1>
      <SearchCart
        setSearchProduct={setSearchProduct}
        query={query}
        setQuery={setQuery}
      />
      <div className="flex flex-row-reverse justify-between gap-3 p-1">
        <Category
          setCategoryProduct={setCategoryProduct}
          query={query}
          setQuery={setQuery}
        />
        <div className="w-3/5 md:w-4/5">
          {products.length === 0 && (
            <RotatingSquare
              visible={true}
              height="100"
              width="100"
              color="rgb(14,116,144)"
              ariaLabel="rotating-square-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.length === 20 &&
              filterProduct.map((item) => <Cart key={item.id} data={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
