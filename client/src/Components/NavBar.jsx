// import { Search } from "@material-ui/icons";
// import { Badge } from "@material-ui/core";
// import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NavBarLeft from "./SubComponents/NavBarItems/NavBarLeft";
import NavBarCenter from "./SubComponents/NavBarItems/NavBarCenter";
import NavBarRight from "./SubComponents/NavBarItems/NavBarRight";



const NavBar = () => {
  return (
    <div className="">
      <div className=" py-2.5 px-5 flex justify-between items-center border border-green-500">
        {/* <div className=" flex-1 flex items-center">
          <div className=" text-sm cursor-pointer">EN</div>
          <div className=" border-2 flex items-center ml-6 p-1 text-gray-400 text-sm">
            <div className=" border-none"> Input</div>
            <Search />
          </div>
        </div> */}
        <NavBarLeft/>

        {/* <div className=" flex-1 text-center">
          <div className=" font-bold">
            <h1>Hobbist Store</h1>
          </div>
        </div> */}
        <NavBarCenter/>

        {/* <div className=" flex-1 flex items-center justify-end">
          <div className=" text-sm cursor-pointer ml-6">Sign in</div>
          <div className=" text-sm cursor-pointer ml-6">Register</div>
          <div className=" text-sm cursor-pointer ml-6">
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div> */}
        <NavBarRight/>

      </div>
    </div>
  );
};

export default NavBar;
