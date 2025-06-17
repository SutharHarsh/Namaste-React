// import IMG_URL from "../../utils/constants.js"

const ResCard = (props) => {
  let { resData } = props;

  const { images, brand, description, rating, price } = resData;

  return (
    <div className="border-1 border-black w-50 m-5 p-2">
      <img src={images} className="w-50 h-50 object-fill" alt="image" />
      <h1>{brand}</h1>
      <h1 className="text-gray-500">{description}</h1>
      <h1>{rating}</h1>
      <h1 className="font-bold">{price}</h1>
    </div>
  );
};

export default ResCard;
