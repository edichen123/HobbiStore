import { Send } from "@material-ui/icons";


const NewsLetter = () => {
  return (
    <div className=' h-[40vh] bg-[#fcf5f5] flex items-center justify-center flex-col'>
        <h1 className=" text-7xl mb-5">Newsletter</h1>
        <div className=" text-2xl font-light mb-5 text-center">Get updates on New Products, Sale, Restock and more!</div>
        <div className=" w-[50%] h-10 bg-white flex justify-between border-[1] border-gray-400">
            <input className=" border-none flex-[8] pl-5" placeholder="Your Email"/>
            <button className=" flex-1 border-none bg-blue-200 text-white">
                <Send/>
            </button>
        </div>
        </div>
  )
}

export default NewsLetter