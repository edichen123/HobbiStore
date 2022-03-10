import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pay = () => {
  const PK =
    "pk_test_51Kako0C88O9BLlUAVZuw8I1beSascc5u3s2nQoW4sEvxSWosw9LRsy9WbkiOz6ILbkRQ6L15mPjDhGvZP4nFb8kx00DSGo5BkT";
  const [stripeToken, setStripeToken] = useState(null);
  //   const navigate = useNavigate()

  const onToken = (token) => {
    setStripeToken(token);
    // console.log(token);
  };

  useEffect(() => {
    const makeReq = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeReq();
  }, [stripeToken]);
  return (
    <div className=" flex justify-center items-center h-full w-full">
      <StripeCheckout
        name="HobbiStore"
        image="https://i.ibb.co/FxYbCKr/Hobbistore-2.jpg"
        billingAddress
        shippingAddress
        description="Total : $20 SGD"
        amount={2000}
        currency="SGD"
        token={onToken}
        stripeKey={PK}
      >
        <button className=" bg-black hover:bg-black/20 text-white font-bold py-2 px-4 rounded">
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
