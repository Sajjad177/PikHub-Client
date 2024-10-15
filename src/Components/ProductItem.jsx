import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="block text-gray-700 cursor-pointer">
      <div className="overflow-hidden bg-white rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {/* Responsive Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-80 sm:h-40 md:h-52 object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        {/* Product Info */}
        <div className="p-3">
          <p className="text-sm md:text-base font-semibold truncate">{name}</p>
          <p className="text-sm md:text-base font-medium text-gray-900">
            {currency} {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

ProductItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
