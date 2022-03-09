import React from "react";
import AllProduct from "../../Components/AllProduct";
import { useLocation } from "react-router";
import FilterProduct from "../../Components/SubComponents/FilterProduct";
import SortProduct from "../../Components/SubComponents/SortProduct";
import { useState } from "react";

const ProductList = (props) => {
  const location = useLocation();
  const categoryLocation = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({ color: "All", size: "S" });
  const [sort, setSort] = useState({});

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilters({
      ...filters,
      [event.target.name]: value,
    });
  };
  // console.log(filters);
  const handleSort = (event) => {
    const value = event.target.value;
    setSort({
      ...sort,
      [event.target.name]: value,
    });
  };
  // console.log(sort);

  return (
    <div className=" ">
      <h1 className=" m-5 text-xl font-bold">Products</h1>

      <div className=" flex justify-between">
        <FilterProduct handleFilter={handleFilter} />
        <SortProduct sort={handleSort} />
      </div>
      <AllProduct category={categoryLocation} filters={filters} sort={sort} />
    </div>
  );
};

export default ProductList;
