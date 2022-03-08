import "./App.css";
import { Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Announcement from "./Components/Announcement";
import NavBar from "./Components/NavBar";
import ScrollToTop from "react-scroll-to-top";
import ProductList from "./Pages/AllProduct/ProductList";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import IndividualProduct from "./Pages/AllProduct/IndividualProduct";
import SignUp from "./Pages/Login/SignUp";
import Login from "./Pages/Login/Login";
import CartCheckoutPage from "./Pages/AllProduct/CartCheckoutPage";
import Pay from "./Pages/Payment/Pay";
import Sucecess from "./Pages/Payment/Success";
import Categories from "./Components/Categories";

function App() {
  const user = true;
  return (
    <div className=" h-screen">
      <Announcement />
      <NavBar />
      <ScrollToTop smooth viewBox="-50 0 256 256" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/" element={<Categories />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<IndividualProduct />} />
        <Route path="/cart" element={<CartCheckoutPage />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
    </div>
  );
}

export default App;
