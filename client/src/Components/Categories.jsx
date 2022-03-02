import React from "react";
import CategoryItems from "./CategoryItems";

const Categories = (props) => {
  const CATEGORIES = [
    {
      id: 1,
      name: "Bag",
      description: "Backpacks/ Totes",
      img : "Photo of a bag"
    },
    {
      id: 2,
      name: "Jacket",
      description: "Overshirt / Work Jacket",
      img: "Photo of a jacket"
    },
    {
      id: 3,
      name: "Folding Bicycle",
      description: "Brompton",
      img: "Photo of a Brompton"
    },
  ];
  const categoriesMap = CATEGORIES.map((item) => {
    return <CategoryItems item={item} key={item.id} />;
  });

  return <div className=" flex p-5 justify-between ">{categoriesMap}</div>;
};

export default Categories;
