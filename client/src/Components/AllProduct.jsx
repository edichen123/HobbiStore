import React from "react";
import SingleProduct from "./SingleProduct";
import products from "./fakeproducts";

const AllProduct = () => {
  const productsMapped = products.map((item) => {
    return <SingleProduct item={item} key={item.id} />;
  });

  return (
    <div className=" p-5 flex flex-wrap justify-between">{productsMapped}</div>
  );
};

export default AllProduct;
