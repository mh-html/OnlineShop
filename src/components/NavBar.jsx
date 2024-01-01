//Package
import { NavLink } from "react-router-dom";
//Icons
import { FaShoppingBag } from "react-icons/fa";
import { useBascketCart } from "../hooks/useBascketCart";
import { calculatorTotal } from "../utils/calculatorTotalPrice";

function NavBar() {
  const { state } = useBascketCart();
  calculatorTotal(state);
  return (
    <div className="container mx-auto">
      <nav className="flex justify-around items-center bg-cyan-700 text-white py-4 font-bold text-sm lg:text-2xl rounded-b-lg">
        <div className="h-8 lg:h-14">
          <h1 className="font-pacifico text-base">JEWEL</h1>
          <h3 className="font-pacifico text-xs">Easy shopping</h3>
        </div>
        <div className="flex justify-between items-center gap-x-4 lg:gap-x-8 text-sm md:text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/bascket" className="relative">
          <FaShoppingBag />
          {!!state.quantityAll && (
            <span className="h-3 w-3 absolute -top-1 -right-1 text-[10px] border border-cyan-800 text-cyan-800 rounded-full flex items-center justify-center bg-white">
              {state.quantityAll}
            </span>
          )}
        </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
