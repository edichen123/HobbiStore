import {
  Facebook,
  Instagram,
  MailOutline,
  Room,
  Phone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" flex flex-wrap ">
      <div className=" flex-1 flex flex-col p-5">
        <p className=" text-5xl">Edi</p>
        <p className=" my-5 mx-0">Things that the Builder Likes</p>
        <div className=" flex">
          <div className=" w-10 h-10 rounded=[50%] text-white bg-blue-400 flex items-center justify-center mr-5">
            <Facebook />
          </div>
          <div className=" w-10 h-10 rounded=[50%] text-black bg-pink-200 flex items-center justify-center mr-5">
            <Instagram />
          </div>
        </div>
      </div>

      <div className=" flex-1 p-5 ">
        <h3 className=" mb-7">Useful Links</h3>
        <ul className=" m-0 p-0 list-none flex flex-col justify-between">
          <Link to="/">
            <li className=" w-1/2 mb-2">Home</li>
          </Link>
          <Link to="/cart">
            <li className=" w-1/2 mb-2">Cart</li>
          </Link>
          <Link to="/products/BackPack">
            <li className=" w-1/2 mb-2">Backpack</li>
          </Link>
          <Link to="/products/FoldingBicycle">
            <li className=" w-1/2 mb-2">Folding Bicycle</li>
          </Link>
          <Link to="/products/Jacket">
            <li className=" w-1/2 mb-2">Jacket</li>
          </Link>
          {/* <li className=" w-1/2 mb-2">My Account</li>
          <li className=" w-1/2 mb-2">Order Tracking</li>
          <li className=" w-1/2 mb-2">Wishlist</li>
          <li className=" w-1/2 mb-2">Terms and Condition</li> */}
        </ul>
      </div>

      <div className=" flex-1 p-5 ">
        <h3 className=" mb-7">Contact</h3>

        <div className=" mb-5 flex items-center ">
          <Room className=" mr-2" /> Near Jurong East, Singapore
        </div>
        <div className=" mb-5 flex items-center ">
          <Phone className=" mr-2" /> +65 9119 7385
        </div>
        <div className=" mb-5 flex items-center ">
          <MailOutline className=" mr-2" /> EdichenJL@outlook.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
