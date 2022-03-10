import React from "react";

const FilterProduct = (props) => {
  return (
    <div className=" m-5">
      <span className=" text-xl font-semibold mr-5">Filter Products:</span>
      <select onChange={props.handleFilter} name="color" className=" p-2 mr-5 ">
        <option disabled value={"Color"}>
          Colour
        </option>
        <option value="All">All</option>
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="Olive">Olive</option>
      </select>
      <select onChange={props.handleFilter} name="size" className=" p-2 mr-5 ">
        <option disabled value={"Size"}>
          Size
        </option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
    </div>
  );
};

export default FilterProduct;
