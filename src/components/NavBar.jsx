//Package
import { NavLink } from "react-router-dom";
//Icons
import { FaShoppingBag } from "react-icons/fa";
import { useBascketCart } from "../hooks/useBascketCart";
import { calculatorTotal } from "../utils/calculatorTotalPrice";
//Logo
import logo from '../assets/images/logoJewel.png'

function NavBar() {
  const { state } = useBascketCart();
  calculatorTotal(state);
  return (
    <div className="container mx-auto">
      <nav className="flex justify-around items-center bg-cyan-700 text-white py-4 font-bold text-2xl rounded-b-lg">
        <div className="h-14"><img src={logo} alt="logo jewel" className="h-full w-full" /></div>
        <div className="flex justify-between items-center gap-x-8 text-sm md:text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/store">Store</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/bascket" className="relative">
          <FaShoppingBag />
          {!!state.quantityAll && (
            <span className="w-5 h-5 absolute -top-2 -right-3 text-[15px] border border-cyan-800 text-cyan-800 rounded-full flex items-center justify-center bg-white">
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
