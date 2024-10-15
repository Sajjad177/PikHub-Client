import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Root = () => {
  return (
    <div className="container mx-auto font-firstFont">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
