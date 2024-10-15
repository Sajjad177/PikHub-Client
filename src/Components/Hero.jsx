import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 bg-gray-50">
      {/* Hero section left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6 lg:px-12">
        <div className="text-[#414141] space-y-4">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-xs sm:text-sm md:text-base uppercase">
              Our Best sellers
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-relaxed font-secondFont font-semibold">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base hover:underline cursor-pointer">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero section right side */}
      <div className="w-full sm:w-1/2">
        <img
          src={heroImg}
          alt="fashion image"
          className="w-full h-[350px] sm:h-auto lg:h-[800px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
