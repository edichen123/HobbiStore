import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";


const NavBarRight = () => {
  return (
<div className=" flex-1 flex items-center justify-end">
          <div className=" text-sm cursor-pointer ml-6">Sign in</div>
          <div className=" text-sm cursor-pointer ml-6">Register</div>
          <div className=" text-sm cursor-pointer ml-6">
            <Badge badgeContent={0} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>  )
}

export default NavBarRight