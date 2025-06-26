import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/store/cartSlice";

const CartProductCard = ({ resData }) => {
  const { brand, description, price, rating, thumbnail } = resData;
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-200 rounded-lg p-5 w-150 m-10 flex items-center cursor-pointer">
      <div className="w-9/12 flex flex-col gap-3">
        <h1 className="font-bold text-xl">{brand ? brand : "Brand"}</h1>
        <p>{description}</p>
        <h1 className="font-semibold">Price: {price}</h1>
        <h1>Rating: {rating}</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeItem());
          }}
          className="bg-red-500 hover:bg-red-600 cursor-pointer w-40 p-2 rounded-lg text-white"
        >
          Remove from Cart
        </button>
      </div>
      <div className="w-3/12">
        <img src={thumbnail} alt="product-image" />
      </div>
    </div>
  );
};

export default CartProductCard;
