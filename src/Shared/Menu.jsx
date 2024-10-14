import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 group">
          <p className="group-hover:text-black transition-colors duration-300 text-lg uppercase">
            Home
          </p>
          <hr className="h-[3px] w-full rounded-full bg-sky-500 border-none hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 group"
        >
          <p className="group-hover:text-black transition-colors duration-300 text-lg uppercase">
            Collection
          </p>
          <hr className="h-[3px] w-full rounded-full bg-sky-500 border-none hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 group">
          <p className="group-hover:text-black transition-colors duration-300 text-lg uppercase">
            About
          </p>
          <hr className="h-[3px] w-full rounded-full bg-sky-500 border-none hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 group"
        >
          <p className="group-hover:text-black transition-colors duration-300 text-lg uppercase">
            Contact
          </p>
          <hr className="h-[3px] w-full rounded-full bg-sky-500 border-none hidden" />
        </NavLink>
      </ul>
    </div>
  );
};

export default Menu;
