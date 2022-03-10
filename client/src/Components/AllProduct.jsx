import React from "react";
import SingleProduct from "./SingleProduct";
// import products from "./fakeproducts";
import { useEffect, useState } from "react";
import axios from "axios";

const AllProduct = (props) => {
  const category = props.category;
  const filters = props.filters;
  const sort = props.sort;
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log(filters)
  // console.log(sort)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const fetchedProduct = await axios.get(
          category ? `/api/products?category=${category}` : "/api/products"
        );
        setProduct(fetchedProduct.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [category]);

  // console.log(product);
  useEffect(() => {
    if (category) {
      const Fproducts = product.filter((item) => {
        if (filters.color === "All") {
          return true;
        }
        return filters.color === item.color && filters.size === item.size;
      });
      setFilteredProducts(Fproducts);
      // console.log(filteredProducts);
    }
  }, [category, filters, product]);

  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "Ascending") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  const productsMapped = filteredProducts.map((item) => {
    return <SingleProduct item={item} key={item._id} />;
  });

  return (
    <div className=" p-5 flex flex-wrap justify-between">{productsMapped}</div>
  );
};

export default AllProduct;
