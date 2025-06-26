import { useDispatch, useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import { Link } from "react-router-dom";
import { clearAllItem } from "../../utils/store/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  if (cartItems.length === 0)
    return (
      <h1 className="text-2xl font-bol m-10">No product added to the Cart!</h1>
    );
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => {
            dispatch(clearAllItem());
          }}
          className="w-30 m-2 p-2 bg-black text-white rounded-lg cursor-pointer"
        >
          Clear Cart
        </button>
      </div>
      <div className="flex mx-auto flex-wrap justify-center">
        {cartItems.map((product) => (
          <Link key={product.id} to={"/productpage/" + product.id}>
            <CartProductCard resData={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CartPage;
