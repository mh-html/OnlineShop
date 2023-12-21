//Componens
import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Category from "../components/Category";
import SearchCart from "../components/SearchCart";
import useShoppingCarts from "../hooks/useShoppingCarts";

function Store() {
  const products = useShoppingCarts();
  const [filterProduct, setFilterProduct] = useState(products);
  const [searchProduct, setSearchProduct] = useState("");
  const [categoryProcust, setCategoryProduct] = useState("all");

  useEffect(() => {
    let filteredItems = null;
    filteredItems = products.filter((products) => {
      if (categoryProcust !== "all")
        return products.category === categoryProcust;
      else return products;
    });
    filteredItems = filteredItems.filter((product) =>
      product.title.toLowerCase().includes(searchProduct)
    );
    setFilterProduct(filteredItems);
  }, [searchProduct, products, categoryProcust]);

  return (
    <div>
      <h1>Online Shop</h1>
      <div className="flex flex-row-reverse justify-between">
        <Category setCategoryProduct={setCategoryProduct} />
        <div>
          <SearchCart setSearchProduct={setSearchProduct} />
          <div className="grid grid-cols-3 gap-4 bg-cyan-600 p-3">
            {filterProduct.map((item) => (
              <Cart key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
