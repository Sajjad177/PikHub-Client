import exchange from "../assets/exchenge.png";
import quality from "../assets/quality.png";
import support from "../assets/support.png";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-12 sm:gap-6 text-center py-12 px-4 sm:px-8 lg:px-16 text-xs sm:text-sm md:text-base text-gray-600">
      <div className="flex flex-col items-center">
        <img src={exchange} alt="Easy Exchange" className="w-16 h-16 mb-4" />
        <p className="font-semibold text-gray-800">Easy Exchange Policy</p>
        <p className="text-gray-500">Hassle-free exchange policy</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={quality} alt="Quality Assurance" className="w-16 h-16 mb-4" />
        <p className="font-semibold text-gray-800">7 Days Return Policy</p>
        <p className="text-gray-500">7 days free return policy</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={support} alt="Customer Support" className="w-16 h-16 mb-4" />
        <p className="font-semibold text-gray-800">Best Customer Support</p>
        <p className="text-gray-500">24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
