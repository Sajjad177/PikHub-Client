import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";

const Root = () => {
  return (
    <div className="container mx-auto font-firstFont">
      <Navbar />
      <SearchBar/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
