import AllProduct from "../../Components/AllProduct";
import Categories from "../../Components/Categories";
import MainSwiper from "../../Components/MainSwiper";
import ProductSwiper from "../../Components/ProductSwiper";

const Home = () => {
  return (
    <div className="h-screen">
      <div className=" h-3/4 w-full">
      {/* <MainSwiper/> */}
        <ProductSwiper />
        <Categories/>
        <AllProduct/>
      </div>
    </div>
  );
};

export default Home;
