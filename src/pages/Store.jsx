//Componens
import Cart from "../components/Cart";
import Category from "../components/Category";
import SearchCart from "../components/SearchCart";
import useShoppingCarts from "../hooks/useShoppingCarts";

function Store() {
  const products = useShoppingCarts();
  return (
    <div>
      <h1>Online Shop</h1>
      <div className="flex flex-row-reverse justify-between">
        <Category />
        <div>
          <SearchCart />
          <div className="grid grid-cols-3 gap-4 bg-cyan-600 p-3">
            {products.map((item) => (
              <Cart key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
