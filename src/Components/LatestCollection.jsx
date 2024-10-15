import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      {/* Section title */}
      <div className="text-center py-8">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our latest fashion arrivals designed for comfort and style.
          Elevate your wardrobe with our carefully curated collection.
        </p>
      </div>

      {/* Rendering products grid */}
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {latestProducts.map((item, idx) => (
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

export default LatestCollection;
