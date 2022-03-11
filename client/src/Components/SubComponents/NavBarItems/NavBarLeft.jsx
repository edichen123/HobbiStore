import { Search } from "@material-ui/icons";
import axios from "axios";
import { useState, useEffect } from "react";

const NavBarLeft = () => {
  // const [query, setQuery] = useState("");
  // const [product, setProduct] = useState([]);

  // const searchItem = (event) => {
  //   setQuery(event.target.value);
  //   console.log(query);
  // };

  // useEffect(() => {
  //   const getProduct = async () => {
  //     const response = await axios.get(`/api/products/`);
  //     setProduct(response.data);
  //   };
  //   getProduct();
  // }, []);
  // console.log(product);

  // const filtered = array/obj.filter(array=>arr.object.toLowerCase().includes(query))
  // const mapfiltered = filtered.map((user)=> return x)

  const handleSubmit = () => {
    console.log("Clicked");
  };
  return (
    <div className=" flex-1 flex items-center">
      {/* <div className=" text-sm cursor-pointer">EN</div> */}
      <form>
        <div className=" border-2 flex items-center ml-6 p-1 text-gray-400 text-sm">
          <div className=" border-none">
            <input
              text="text"
              placeholder="Search"
              // onChange={searchItem}
            />
            <button onClick={handleSubmit}>
              <Search className=" hover:text-black hover:transform hover:scale-150" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NavBarLeft;
