import { Add, Remove } from "@material-ui/icons";

const IndividualProduct = () => {
  return (
    <div>
      <div className=" p-12 flex">
        <div className=" w-3/5 ">
          <img
            src="https://cdn.shopify.com/s/files/1/1343/3851/products/Topo-Designs-Topo-Global-Briefcase-3-Day-Navy-03_1200x1200.jpg?v=1632552150"
            alt=" topo brief"
            className=" w-full h-[90vh] object-cover "
          />
        </div>
        <div className=" flex-1 py-60 px-12 text-center ">
          <h1 className=" text-5xl font-extralight">Title</h1>
          <p className=" my-5 mx-0">Description</p>
          <span className=" font-thin text-3xl">Price</span>
          <div className=" w-auto flex items-center justify-between ">
            <div className=" flex items-center font-bold">
              <Remove className=" hover:transition-all hover:scale-110 hover:transform" />
              <span className=" w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center my-0 mx-1 ">
                1
              </span>
              <Add className=" hover:transition-all hover:scale-110 hover:transform" />
              <button className=" p-3 border border-slate-200 bg-white cursor-pointer font-medium hover:bg-black/20">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
