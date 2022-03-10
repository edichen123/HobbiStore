import { Add, Remove } from "@material-ui/icons";
import NewsLetter from "../../Components/NewsLetter";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import axios from "axios";
// import { userRequest } from "../../AxiosRequest";
import { Navigate } from "react-router-dom";

const CartCheckoutPage = (props) => {
  const PK =
    "pk_test_51Kako0C88O9BLlUAVZuw8I1beSascc5u3s2nQoW4sEvxSWosw9LRsy9WbkiOz6ILbkRQ6L15mPjDhGvZP4nFb8kx00DSGo5BkT";

  const cart = useSelector((state) => state.cart); // redux
  // console.log(cart)
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
    // console.log(token);
    // console.log(stripeToken);
  };

  useEffect(() => {
    const makeReq = async () => {
      try {
        const response = await axios.post(`/api/checkout/payment`, {
          // const response = await axios.post("http://localhost:3001/api/checkout/payment", {
          tokenID: stripeToken.id,
          amount: cart.totalPrice * 100,
          currency: "sgd",
        });
        console.log(response.data);
        <Navigate to="/success" data={response.data} />;
      } catch (error) {}
    };
    stripeToken && cart.totalPrice >= 1 && makeReq();
  }, [stripeToken, cart.totalPrice]);

  const cartDetail = cart.products.map((product) => {
    return (
      <div key={product._id} className=" flex-[1.5] w-3/5">
        <div className=" flex justify-between ">
          <div className=" flex-[2] flex">
            <button className=" ml-14">x</button>
            <img src={product.imgURL} alt="BackPack" className=" w-48" />
            <div className=" p-5 flex flex-col justify-around ">
              <span>
                <b>Name: </b>
                {product.title}
              </span>
              <span>
                <b>${product.price} SGD</b>
              </span>
            </div>
          </div>

          <div className=" flex-[1.5] flex items-center justify-center ">
            <div className=" flex items-center mb-5 w-1/3 justify-around">
              <Add className=" border border-black rounded-full cursor-pointer" />
              <div className=" text-lg m-1 ">{product.qty}</div>
              <Remove className=" border border-black rounded-full cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="">
      <div className=" p-5">
        <p className=" text-4xl text-center font-light">Your Cart</p>

        <div className=" flex items-center justify-between p-5">
          <button className=" p-2 font-normal border rounded border-black hover:transform hover:scale-110 ">
            BACK TO SHOPPING
          </button>
          <div className="">
            <span className=" underline cursor-pointer my-0 mx-3 ">
              Shopping Bag ( )
            </span>
            <span className=" underline cursor-pointer my-0 mx-3 ">
              Wishlist
            </span>
          </div>
        </div>
        <hr></hr>
        <div className=" flex justify-between flex-col">
          {cartDetail}
          <div className=" flex-1 p-5 h-[50vh] flex flex-col items-end justify-end pr-40">
            <p className=" font-extralight text-3xl">Subtotal</p>
            <div className=" text-xl font-extralight">
              ${cart.totalPrice} SGD
            </div>
            <StripeCheckout
              name="HobbiStore"
              image="https://i.ibb.co/FxYbCKr/Hobbistore-2.jpg"
              billingAddress
              shippingAddress
              description={`Cart Total: ${cart.totalPrice}`}
              amount={cart.totalPrice * 100}
              // description="$20"
              // amount={2000}
              currency="SGD"
              token={onToken}
              stripeKey={PK}
              zipCode={false}
            >
              <button className=" p-2 mt-5 font-normal border rounded bg-gray-700 text-white hover:transform hover:bg-white hover:text-black">
                CHECKOUT
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CartCheckoutPage;
