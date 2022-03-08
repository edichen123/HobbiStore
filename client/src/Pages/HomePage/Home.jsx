import AllProduct from "../../Components/AllProduct";
import Categories from "../../Components/Categories";
import ProductSwiper from "../../Components/ProductSwiper";

import NewsLetter from "../../Components/NewsLetter";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div className="h-screen">
      <div className=" h-3/4 w-full">
        <ProductSwiper />
        <Categories/>
        <AllProduct/>
        <NewsLetter/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
