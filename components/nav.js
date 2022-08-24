import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
      <div className="flex items-center">
        <button className="mr-1" aria-label="Open Menu">
          <svg
            onClick={() => setOpen(!open)}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-black hover:text-gray-500"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <span className="text-2xl font-semibold ml-3 drop-shadow-lg text-green-700">
          retain
        </span>
      </div>
      <div className="flex items-center">
        <div className="hidden md:block md:flex md:justify-between md:bg-transparent">
          <button className="flex items-center p-3 mr-2 text-center rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400 text-3xl text-green-700">
            <BiUserCircle />
          </button>
        </div>
      </div>

      {open ? (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setOpen(false)}
          ></div>
        </div>
      ) : (
        false
      )}

      <aside
        className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          open ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <span
          onClick={() => setOpen(!open)}
          className="flex items-center p-4 hover:bg-green-700 hover:text-white "
        >
          <span className="mr-2 text-2xl">
            <AiOutlineHome />
          </span>
        </span>
      </aside>
    </nav>
  );
}
