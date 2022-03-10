import React from "react";
import { Link } from "react-router-dom";

const CategoryItems = (props) => {
  return (
    <div className=" flex-1 m-1 h-[70vh] relative ">
      <Link to={`/products/${props.item.cat}`}>
        <img
          src={props.item.img}
          alt={props.item.description}
          className=" w-full h-full object-cover"
        />
        <div className=" absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className=" text-white mb-1 font-bold text-xl">
            {props.item.name}
          </h1>
          <button className=" rounded-none p-2 bg-white text-gray-400 font-semibold">
            Shop Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItems;
