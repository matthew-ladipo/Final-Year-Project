import { CiLogout } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiGitRepositoryFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import User from "./User";
import { useState } from "react";

function Nav({ logout }) {
  const { pathname } = useLocation();

  const [showProfile, setShowProfile] = useState(false)

  function hamdlePopUp () {
      setShowProfile((prev) => !prev)
  }

  
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-b-[1.4px] border-solid border-gray-300  sticky absolute top-4  w-100 ">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <span>
              <RiGitRepositoryFill className="text-[20px] text-purple-500 text-2xl" />
            </span>
            <p className="text-[20px] text-purple-500 text-2xl ">DLRS</p>
          </div>
        </div>
        <form class="form relative mr-[200px]">
          <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
              class="w-5 h-5 text-gray-700"
            >
            </svg>
          </button>
          
          <button
            type="reset"
            className="absolute right-3 -translate-y-1/2 top-1/2 p-1"
          >
            
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            
          </button>
        </form>

        <FaRegCircleUser onClick={hamdlePopUp} className="text-purple-500 text-[30px]" />
      </div>
      {showProfile && <User logout={logout} /> }
    </div>
  );
}
export default Nav;
