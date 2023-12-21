import { Route, Routes } from "react-router-dom";
//Contexts
import ShoppingCartContext from "./context/ShoppingCartContext";
//Pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import AboutUs from "./pages/AboutUs";
//Componens
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ShoppingCartContext>
          <Routes>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="about-us" element={<AboutUs />} />
          </Routes>
      </ShoppingCartContext>
    </>
  );
}

export default App;
