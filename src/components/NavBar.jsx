import { memo, useRef, useState } from "react";
//Package
import { NavLink } from "react-router-dom";
//Icons
import { FaShoppingBag } from "react-icons/fa";
import { SiDarkreader } from "react-icons/si";
import { MdLightMode } from "react-icons/md";
//Hooks
import { useBascketCart } from "../hooks/useBascketCart";
import { calculatorTotal } from "../utils/calculatorTotalPrice";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false)
  const { state } = useBascketCart();
  calculatorTotal(state);
  const darkmodeHandler = () => {
    darkMode
    ? document.documentElement.classList.remove("dark")
    : document.documentElement.classList.add("dark")
    setDarkMode(darkMode => !darkMode)
  };
  return (
    <div className="container mx-auto">
      <nav className="flex justify-around items-center bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-white shadow-md py-4 font-bold text-2xl rounded-b-lg">
        <div className="h-8 lg:h-14">
          <h1 className="font-pacifico text-base">JEWEL</h1>
          <h3 className="font-pacifico text-xs">Easy shopping</h3>
        </div>
        <div className="flex justify-between items-center gap-x-4 lg:gap-x-8 text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/bascket" className="relative">
            <FaShoppingBag />
            {!!state.quantityAll && (
              <span className="h-3 w-3 absolute -top-1 -right-1 text-[10px] border border-black text-black rounded-full flex items-center justify-center bg-white">
                {state.quantityAll}
              </span>
            )}
          </NavLink>
          <button onClick={darkmodeHandler}>
            {darkMode ? <SiDarkreader /> :  <MdLightMode />} 
          </button>
        </div>
      </nav>
    </div>
  );
}

export default memo(NavBar);
