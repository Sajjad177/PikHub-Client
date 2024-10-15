import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [isBestSeller, setIsBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setIsBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quo
          sequi veritatis iusto aliquam in voluptas obcaecati non nisi sapiente!
        </p>
      </div>
      {/* Display best seller products */}
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {isBestSeller.map((item, idx) => (
          <ProductItem
            key={idx}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
