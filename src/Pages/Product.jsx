import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ReactStars from "react-stars";
import RelatedProduct from "../Components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item.id == productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]); // Set the first image as the default
    } else {
      console.log("Product not found");
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*----------- products images -------------*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {/* -------- image map there --------- */}
            {productData?.image?.map((item, idx) => (
              <img
                src={item}
                alt={`Product Image ${idx + 1}`}
                key={idx}
                className={`w-16 h-16 sm:w-full sm:h-auto cursor-pointer p-1 rounded-lg transition-all duration-200 hover:scale-105 ${
                  item === image ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          {/* when you click side image then show there image as big screen */}
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="Selected Product" />
          </div>
        </div>
        {/* --------- Display product information -------  */}
        <div className="flex-1">
          <h1 className="font-semibold text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {/* Dynamic Rating Stars */}
            <ReactStars
              count={5}
              value={productData.rating}
              size={24}
              color2={"#FF6500"}
              edit={false}
            />
            <p className="pl-2">(123)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            {/* display the size  */}
            <div className="flex gap-2">
              {productData.size.map((item, idx) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-3 px-4 bg-gray-100 ${
                    item === size ? "border-orange-600" : ""
                  }`}
                  key={idx}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-slate-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Description and review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(123)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            non praesentium numquam dolores minima tenetur necessitatibus
            repudiandae corrupti quaerat id.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            non praesentium numquam dolores minima tenetur necessitatibus
            repudiandae corrupti quaerat id.
          </p>
        </div>
      </div>

      {/* display related product  */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
