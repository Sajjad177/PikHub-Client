import Menu from "../Shared/Menu";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo2.jpeg";
import user from "../assets/profile.png";
import cart from "../assets/cart.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium container mx-auto">
      {/* logo is here */}
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-10 h-10" />
      </Link>

      {/* Menus is here */}
      <Menu />

      <div className="flex items-center gap-6">
        <IoSearchOutline className="w-8 h-8 cursor-pointer" />
        <div className="group relative">
          <img src={user} alt="user" className="w-7 h-7" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={cart} alt="cart" className="w-8 h-8" />
          <p className="absolute right-[5px] bottom-[20px] w-5 text-center leading-5 bg-gray-500 text-white aspect-square rounded-full text-[10px]">
            5
          </p>
        </Link>

        <IoMenuSharp
          onClick={() => setVisible(true)}
          className="w-7 h-7 cursor-pointer sm:hidden"
        />
      </div>

      {/* sidebar menu for small device */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
          visible ? "translate-x-0 w-3/4" : "translate-x-full w-0"
        } shadow-lg sm:hidden`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          {/* Sidebar header with back button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center p-4 bg-gray-100"
          >
            <IoIosArrowBack className="w-6 h-6 cursor-pointer" />
            <p className="text-lg ml-2">Back</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-1 text-lg">
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 pl-6 hover:bg-gray-200 transition-colors duration-200 border-b"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 pl-6 hover:bg-gray-200 transition-colors duration-200 border-b"
              to="/collection"
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 pl-6 hover:bg-gray-200 transition-colors duration-200 border-b"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 pl-6 hover:bg-gray-200 transition-colors duration-200 border-b"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>

          {/* Optional footer or extra content */}
          <div className="mt-auto p-4 bg-gray-100">
            <p className="text-sm text-center">© 2024 Your Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
