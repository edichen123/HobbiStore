import { Search } from "@material-ui/icons";

const NavBarLeft = () => {
  return (
    <div className=" flex-1 flex items-center">
          <div className=" text-sm cursor-pointer">EN</div>
          <div className=" border-2 flex items-center ml-6 p-1 text-gray-400 text-sm">
            <div className=" border-none"> Input</div>
            <Search />
          </div>
        </div>
  )
}

export default NavBarLeft