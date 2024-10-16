import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);


  // The search bar only show in collection page and other page it hidden
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div
        className="inline-flex items-center justify-center border border-gray-400 px-5 py-2
            my-5 mx-3 rounded-full w-3/4 sm:w-1/2"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <IoSearchOutline />
      </div>
      <RxCross2
        onClick={() => setShowSearch(false)}
        className="inline size-8 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;
