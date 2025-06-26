import { useParams } from "react-router-dom";
import ProductPageShimmer from "../Shimmer-UI/ProductPageShimmer";
import useProductData from "../../utils/hooks/useProductData";
import Review from "./Review";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/store/cartSlice";

const ProductPage = () => {
  const { productId } = useParams();
  const productData = useProductData(productId);
  const { thumbnail, brand, description, rating, price, reviews } = productData;
  const [showIndex, setShowIndex] = useState(null);

  const dispatch = useDispatch();

  if (productData.length === 0) return <ProductPageShimmer />;

  return (
    <>
      {/* Information */}
      <div className="flex flex-col gap-5 mt-10">
        <div className="image px-20">
          <img
            src={thumbnail}
            className="w-80 bg-gray-200 rounded-3xl"
            alt="prodcut-image"
          />
        </div>
        <h1 className="text-3xl pl-20">{brand}</h1>
        <p className="text-xl text-gray-600 px-20">{description}</p>
        <h2 className="text-xl px-20"> Rating: {rating}</h2>
        <h2 className="text-xl px-20"> Price: {price} </h2>
        <button
          onClick={() => {
            dispatch(addItem(productData));
          }}
          className="w-50 ml-20 bg-gray-500 hover:bg-gray-700 cursor-pointer text-white p-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
      {/* Reviews*/}
      <div className="w-6/12 ml-20 p-3 my-5">
        {reviews.map((review, index) => {
          const uniqueId = uuidv4();
          return (
            <Review
              key={uniqueId}
              reviewData={review}
              showData={index === showIndex ? true : false}
              setShowIndex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
