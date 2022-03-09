import React from "react";
import Logo from "../../../IMG/Logo";
import { Link } from "react-router-dom";

const NavBarCenter = () => {
  return (
    <div className=" flex-1">
      <Link to={"/"}>
      <img className="" src={Logo} alt="LOGOPHOTO" />
      </Link>
    </div>
  );
};

export default NavBarCenter;
