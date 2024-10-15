import logo from "../assets/logo2.jpeg";

const Footer = () => {
  return (
    <div className="py-10 px-5 md:px-10">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        {/* Logo and description */}
        <div>
          <img src={logo} alt="logo" className="mb-5 w-32 h-auto" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio, rem!
          </p>
        </div>

        {/* Company section */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-800">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-gray-800 cursor-pointer">Home</li>
            <li className="hover:text-gray-800 cursor-pointer">About us</li>
            <li className="hover:text-gray-800 cursor-pointer">Delivery</li>
            <li className="hover:text-gray-800 cursor-pointer">
              Private Policy
            </li>
          </ul>
        </div>

        {/* Get in Touch section */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-800">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-gray-800">01907488316</li>
            <li className="hover:text-gray-800">sajjadhossainx06@gamil.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom footer text */}
      <hr />
      <div className="text-center text-gray-500 mt-8">
        ©2024 PikHub.com. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
