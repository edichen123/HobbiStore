import Footer from "../../Components/Footer";
import NewsLetter from "../../Components/NewsLetter";
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
// import axios from "axios";
import { publicRequest } from "../../AxiosRequest";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/shoppingCartRedux";
import { useDispatch } from "react-redux";

const IndividualProduct = () => {
  const location = useLocation();
  const productID = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const backToCat = `/products/${productID}`;

  // console.log(productID);
  useEffect(() => {
    const getIndividualProduct = async () => {
      try {
        const fetchedProduct = await publicRequest.get(
          "/products/find/" + productID
        );
        // const fetchedProduct = await axios.get("/products/find/" + productID);
        setProduct(fetchedProduct.data);
      } catch (error) {
        // console.log(error)
      }
    };
    getIndividualProduct();
  }, [productID]);

  const handleQty = (type) => {
    if (type === "minus") {
      if (qty > 1) {
        setQty(qty - 1);
      }
    } else {
      setQty(qty + 1);
    }
  };

  const handleClick = () => {
    // dispatch(addProduct({ product, qty, price: product.price * qty}));
    dispatch(addProduct({ ...product, qty, }));
  };

  // console.log(product);
  return (
    <div>
      <div className=" p-12 flex">
        <div className=" h-1/5 w-3/5 ">
          <img
            src={product.imgURL}
            alt=" topo brief"
            className=" w-full h-[90vh] object-cover "
          />
        </div>
        <div className=" flex-1 py-60 px-12 text-center ">
          <h1 className=" text-5xl font-extralight">{product.title}</h1>
          <p className=" my-5 mx-0">{product.description}</p>
          <span className=" font-thin text-2xl">${product.price} SGD</span>
          <div className=" w-auto flex items-center justify-between ">
            <div className=" flex items-center font-bold pl-28">
              <Remove
                onClick={() => handleQty("minus")}
                className=" hover:transition-all hover:scale-110 hover:transform"
              />
              <span className=" w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center my-0 mx-1 ">
                {qty}
              </span>
              <Add
                onClick={() => handleQty("add")}
                className=" hover:transition-all hover:scale-110 hover:transform"
              />
              <button
                onClick={handleClick}
                className=" p-3 mt-3 rounded-2xl border border-slate-200 bg-white cursor-pointer font-medium hover:bg-black/20"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className=" ">
          <Link to={"/"}>
            <p className=" border rounded border-black p-2 hover:transform hover:scale-110 hover:bg-black/20">
              Home
            </p>
          </Link>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default IndividualProduct;
