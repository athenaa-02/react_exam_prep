import Header from "./components/Header";
import Footer from "./components/Footer";
import Parent from "./components/Parent";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/themeContext";

import "./App.css";

function App() {
  let theme = "dark";

  return (
    <>
      <Header ></Header>
      {/* 3.3 */}
      {/* <ThemeContext.Provider value={theme}>
        <Parent></Parent>
      </ThemeContext.Provider> */}

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/product/:id" element={<Product></Product>}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
