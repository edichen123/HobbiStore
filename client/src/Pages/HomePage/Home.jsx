import AllProduct from "../../Components/AllProduct";
import Categories from "../../Components/Categories";
import ProductSwiper from "../../Components/ProductSwiper";
import { Link } from "react-router-dom";
import NewsLetter from "../../Components/NewsLetter";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div className="h-screen">
      <div className=" h-3/4 w-full">
        <ProductSwiper />
        <Categories />
        {/* <Link to={"/products"}>
          <div className=" flex justify-end ">
            <p className=" hover:scale-110 hover:bg-black/20 rounded border border-black p-2 mr-5">
              SHOP ALL
            </p>
          </div>
        </Link> */}
        <AllProduct />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
