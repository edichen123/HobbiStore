import { Add, Remove } from "@material-ui/icons";

const CartCheckoutPage = (props) => {
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
        <div className=" flex justify-between ">
          <div className=" flex-[1.5] ">
            <div className=" flex justify-between ">
              <div className=" flex-[2] flex">
                  <button className=" ml-14">x</button>
                <img
                  src="https://cdn.shopify.com/s/files/1/0335/5987/1619/products/UnboxTherapyXPacsafe_25L_Backpack_82203104_1_1024x1024.jpg?v=1590048622"
                  alt=" bp"
                  className=" w-48"
                />
                <div className=" p-5 flex flex-col justify-around ">
                  <span>
                    <b>Product Name: </b>BackPack
                  </span>
                  <span>
                    <b>Product id: </b>BackPack
                  </span>
                </div>
              </div>

              <div className=" flex-[1.5] flex flex-col items-center justify-center ">
                <div className=" flex items-center mb-5 w-1/3 justify-around">
                  <Add className=" border border-black rounded-full cursor-pointer" />
                  <div className=" text-lg m-1 "> QTY</div>
                  <Remove className=" border border-black rounded-full cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          
          <div className=" flex-1 p-5 h-[50vh]">
             <p className=" font-extralight text-3xl">Subtotal</p>
            <div className=" text-xl font-extralight">Price * QTY</div>
            <button className=" p-2 mt-5 font-normal border rounded bg-gray-700 text-white hover:transform hover:bg-white hover:text-black">
              CHECKOUT
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CartCheckoutPage;
