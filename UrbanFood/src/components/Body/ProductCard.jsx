import { useContext } from "react";
import UserContext from "../../utils/context/UserContext";

const ProductCard = (props) => {
  let { resData } = props;
  const { thumbnail, brand, description, rating, price } = resData;

  // const data = useContext(UserContext);

  return (
    <div className=" bg-gray-100 rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-150 ease-in w-50 m-5 p-2">
      <img src={thumbnail} className="w-50 h-50 object-fill" alt="image" />
      <h1>{brand}</h1>
      <h1 className="text-gray-500">{description}</h1>
      <h1>{rating}</h1>
      <h1 className="font-bold">{price}</h1>
      {/* <h1 className="italic">{data.userName}</h1> */}
    </div>
  );
};

export const withLowStockLabel = (ProductCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 bg-black text-white rounded-lg">
          Low Stock
        </label>
        <ProductCard {...props} />
      </div>
    );
  };
};

export default ProductCard;
