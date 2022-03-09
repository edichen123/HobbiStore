import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {useSelector} from "react-redux"

const NavBarRight = () => {

// const cart = useSelector(state =>state.cart)
const qty = useSelector(state =>state.cart.qty)
console.log(qty)
  return (
<div className=" flex-1 flex items-center justify-end">
          <div className=" text-sm cursor-pointer ml-6">Sign in</div>
          <div className=" text-sm cursor-pointer ml-6">Register</div>
          <div className=" text-sm cursor-pointer ml-6">
            <Badge badgeContent={qty} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>  )
}

export default NavBarRight