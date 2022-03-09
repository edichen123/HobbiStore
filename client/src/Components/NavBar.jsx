import NavBarLeft from "./SubComponents/NavBarItems/NavBarLeft";
import NavBarCenter from "./SubComponents/NavBarItems/NavBarCenter";
import NavBarRight from "./SubComponents/NavBarItems/NavBarRight";

const NavBar = () => {
  return (
    <div className="">
      <div className=" py-2.5 px-5 flex justify-between items-center border border-green-500">
        <NavBarLeft />

        <NavBarCenter />

        <NavBarRight />
      </div>
    </div>
  );
};

export default NavBar;
