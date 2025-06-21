import { useParams } from "react-router-dom";
import ProductPageShimmer from "../Shimmer-UI/ProductPageShimmer";
import useProductData from "../../utils/hooks/useProductData";

const ProductPage = () => {
  const { productId } = useParams();

  const productData = useProductData(productId);

  const { images, brand, description, rating, price } = productData;

  if (productData.length === 0) return <ProductPageShimmer />;

  return (
    <>
      <div className="flex flex-col gap-5 mt-10">
        <div className="image px-20">
          <img
            src={images}
            className="w-80 bg-gray-200 rounded-3xl"
            alt="prodcut-image"
          />
        </div>
        <h1 className="text-3xl pl-20">{brand}</h1>
        <p className="text-xl text-gray-600 px-20">{description}</p>
        <h2 className="text-xl px-20"> Rating: {rating}</h2>
        <h2 className="text-xl px-20"> Price: {price} </h2>
      </div>
    </>
  );
};

export default ProductPage;
