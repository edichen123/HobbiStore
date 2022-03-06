import "./App.css";
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

function App() {
  return (
    <div className=" h-screen">
      <Announcement />
      <NavBar />
      {/* <Home /> */}
      {/* <ProductList /> */}
      {/* <IndividualProduct/> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      <CartCheckoutPage/>
      <NewsLetter />
      <Footer />
      <ScrollToTop smooth viewBox="-50 0 256 256" />
    </div>
  );
}

export default App;
