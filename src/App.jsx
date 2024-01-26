import { Route, Routes } from "react-router-dom";
//Contexts
import ShoppingCartContext from "./context/ShoppingCartContext";
//Pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import AboutUs from "./pages/AboutUs";
//Componens
import NavBar from "./components/NavBar";
import DetailsProduct from "./pages/DetailsProduct";
import BascketCartContext from "./context/BascketCartContext";
import Bascket from "./pages/Bascket";

function App() {
  return (
    <div className="bg-bl dark:bg-bd">
      <ShoppingCartContext>
        <BascketCartContext>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="store/:id" element={<DetailsProduct />} />
            <Route path="bascket" element={<Bascket />} />
            <Route path="about-us" element={<AboutUs />} />
          </Routes>
        </BascketCartContext>
      </ShoppingCartContext>
    </div>
  );
}

export default App;
