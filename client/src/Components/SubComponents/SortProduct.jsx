import React from "react";

const SortProduct = (props) => {

  return (
    <div className=" m-5">
      <span className=" text-xl font-semibold mr-5">Sort Products:</span>
      <select onChange={props.sort} className=" p-2 mr-5 ">
        <option value="Newest">Newest</option>
        <option value="Ascending">Price (Low To High)</option>
        <option value="Descending">Price (High to Low)</option>
      </select>
    </div>
  );
};

export default SortProduct;
