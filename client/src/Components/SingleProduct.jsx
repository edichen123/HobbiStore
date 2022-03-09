import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const SingleProduct = (props) => {
  // console.log(props.item)
  return (
    <div className=" flex-1 m-1 min-w-[280px] h-[350px] flex items-center justify-center bg-slate-100 relative">
      <div className=" w-[200px] h-[200px] rounded-[50%] bg-white absolute " />
      <img
        src={props.item.imgURL}
        alt={props.item.description}
        className=" h-3/4 z-[2]"
      />
      <div className=" opacity-0 w-full h-full absolute top-0 left-0 bg-black/20 z-[3] flex items-center justify-center cursor-pointer hover:opacity-100">
        <div className=" w-10 h-10 rounded-[50%] bg-white flex items-center justify-center m-2 transition duration-75 cursor-pointer hover:bg-slate-100 hover:scale-110">
          <ShoppingCartOutlinedIcon />
        </div>
        <Link to ={`/product/${props.item._id}`}>
          <div className=" w-10 h-10 rounded-[50%] bg-white flex items-center justify-center m-2 transition cursor-pointer hover:bg-slate-100 hover:scale-110">
            <SearchOutlinedIcon />
          </div>
        </Link>

        <div className=" w-10 h-10 rounded-[50%] bg-white flex items-center justify-center m-2 transition cursor-pointer hover:bg-slate-100 hover:scale-110">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
