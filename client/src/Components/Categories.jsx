import React from "react";
import CategoryItems from "./CategoryItems";

const Categories = (props) => {
  const CATEGORIES = [
    {
      id: 1,
      name: "Bag",
      description: "Backpacks/ Totes",
      img : "https://cdn.shopify.com/s/files/1/1567/6353/products/ctbcopy15_800x.jpg?v=1637264541"
    },
    {
      id: 2,
      name: "Jacket",
      description: "Overshirt / Work Jacket",
      img: "https://cdn.shopify.com/s/files/1/0496/8602/0247/products/ECOM_0040_DSC02820_1296x.jpg?v=1639154339"
    },
    {
      id: 3,
      name: "Folding Bicycle",
      description: "Brompton",
      img: "https://images.immediate.co.uk/production/volatile/sites/21/2021/11/Brompton_P-line_hero-071036c.jpg?quality=90&resize=768,574"
    },
  ];
  const categoriesMap = CATEGORIES.map((item) => {
    return <CategoryItems item={item} key={item.id} />;
  });

  return <div className=" flex p-5 justify-between ">
      {categoriesMap}
      </div>;
};

export default Categories;
