import React from "react";
import AllProduct from "../../Components/AllProduct";
import { useLocation } from "react-router";
const ProductList = () => {
  return (
    <div className=" ">
      <h1 className=" m-5">Backpack</h1>

      <div className=" flex justify-between">
        <div className=" m-5">
          <span className=" text-xl font-semibold mr-5">Filter Products:</span>
          <select className=" p-2 mr-5 ">
            <option value={"Color"}>Colour</option>
            <option>Black</option>
            <option>Blue</option>
            <option>Olive</option>
          </select>
          <select className=" p-2 mr-5 ">
            <option value={"Size"}>Size</option>
            <option>Day pack</option>
            <option>Medium-sized bags</option>
            <option>Big Bags</option>
          </select>
        </div>

        <div className=" m-5">
          <span className=" text-xl font-semibold mr-5">Sort Products:</span>
          <select className=" p-2 mr-5 ">
            {/* <option disabled selected>Neweset</option> */}
            <option>Price (Low To High)</option>
            <option>Price (High to Low)</option>
          </select>
        </div>
      </div>
      <AllProduct />
    </div>
  );
};

export default ProductList;
