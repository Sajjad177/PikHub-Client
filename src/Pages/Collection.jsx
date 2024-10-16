import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { MdArrowForwardIos } from "react-icons/md";
import Title from "../Components/Title";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // for category section
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // for sub category:
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // apply filter for category and subcategory sections
  const applyFilter = () => {
    let productsCopy = products.slice();

    // search function added there
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  // Shorting function :
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 pt-10 border-t px-4 sm:px-10">
      {/* Filter options */}
      <div className="w-full sm:w-1/4">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-2xl flex items-center justify-between cursor-pointer gap-2 sm:justify-start sm:text-lg font-semibold"
        >
          FILTERS
          <MdArrowForwardIos
            className={`sm:hidden transition-transform duration-300 ${
              showFilter ? "rotate-90" : "rotate-0"
            }`}
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 p-5 mt-6 transition-all duration-300 ease-in-out ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-bold">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 p-5 mt-5 transition-all duration-300 ease-in-out ${
            showFilter ? "block" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-bold">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Right side product list */}
      <div className="w-full sm:w-3/4">
        <div className="flex justify-between items-center text-lg sm:text-2xl mb-6">
          {/* Title */}
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Sorting dropdown */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 rounded-md border-gray-300 text-sm px-3 py-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        {/* Product listing */}
        <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, idx) => (
              <ProductItem
                key={idx}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-lg font-semibold text-orange-600 inline-block animate-bounce">
              Product is not available right now.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
