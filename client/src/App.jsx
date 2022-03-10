import "./App.css";
import { Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Announcement from "./Components/Announcement";
import NavBar from "./Components/NavBar";
import ScrollToTop from "react-scroll-to-top";
import ProductList from "./Pages/AllProduct/ProductList";
// import NewsLetter from "./Components/NewsLetter";
// import Footer from "./Components/Footer";
import IndividualProduct from "./Pages/AllProduct/IndividualProduct";
import SignUp from "./Pages/Login/SignUp";
import Login from "./Pages/Login/Login";
import CartCheckoutPage from "./Pages/AllProduct/CartCheckoutPage";
// import Pay from "./Pages/Payment/Pay";
// import Sucecess from "./Pages/Payment/Success";
// import Categories from "./Components/Categories";
import AllProduct from "./Components/AllProduct";
import Success from "./Pages/Payment/Success";
import { useDispatch, useSelector } from "react-redux";
import Logout from "./Pages/Login/Logout";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // const loggedIn = useSelector((state) => state.user.loggedIn);
  const register = useSelector((state) => state.register.registered);
  // console.log(register)
  return (
    <div className=" h-screen">
      <Announcement />
      <NavBar />
      <ScrollToTop smooth viewBox="-50 0 256 256" />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products/" element={<AllProduct />} /> */}
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<IndividualProduct />} />
        <Route path="/cart" element={<CartCheckoutPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/logout"
          element={register ? <Navigate to="/" /> : <Logout />}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
