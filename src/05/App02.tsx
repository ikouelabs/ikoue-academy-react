import {useState} from "react";
import {BiCommentDetail} from "react-icons/bi";
import {CiBookmarkCheck} from "react-icons/ci";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {LuSend} from "react-icons/lu";


export default function App02() {

  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-blue-100 w-screen h-screen flex items-center place-content-center">
      <div className="bg-white rounded-lg shadow w-44 h-72 flex flex-col">
        <div className="h-8 px-2 py-2 flex">
          <div className=" bg-red-500 w-5 h-5 rounded-full"></div>
          <div className="pl-1">
            <div className="text-[7px] font-bold">@vitalityhub</div>
            <div className="text-[6px] text-gray-400">
              Colomadu, Indonesia
            </div>
          </div>
        </div>
        <div className="p-4 bg-[#DAF5F4] flex-1 flex flex-col items-center place-content-end ">


          <div className="text-base tracking-tighter leading-4 text-[#0B35E3] font-extrabold text-center">
            How to Control Anger and Maintain Inner Peace
          </div>

        </div>

        <div className="h-8 flex items-center px-2">
          <div className="flex w-1/2 space-x-2">
            {liked ?
              <button className="cursor-pointer" onClick={() => setLiked(false)}>
                <FaHeart className="text-red-500"/>
              </button>
              :
              <button className="cursor-pointer" onClick={() => setLiked(true)}>
                <FaRegHeart/>
              </button>
            }
            <BiCommentDetail/>
            <LuSend/>
          </div>
          <div className="flex place-content-end  w-1/2">
            <CiBookmarkCheck/>
          </div>
        </div>

      </div>
    </div>
  )
}
