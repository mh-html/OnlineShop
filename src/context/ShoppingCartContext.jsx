import { createContext, useEffect, useState } from "react";
import fakeStoreApi from "../services/config";

export const ShoppingCartContextProvider = createContext(null);

function ShoppingCartContext({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const response = await fakeStoreApi.get("/products");
        setProducts(response);
      })();
    } catch (error) {
      console.log(error.message);
    }
    // try {
    //   const fetchData = async () => {
    //     const response = await fakeStoreApi.get('/products');
    //     setProducts(response);
    //   };
    //   fetchData();
    // } catch (error) {
    //   console.log(error.message);
    // }
  }, []);
  return (
    <ShoppingCartContextProvider.Provider value={products}>
      {children}
    </ShoppingCartContextProvider.Provider>
  );
}

export default ShoppingCartContext;
