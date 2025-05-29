import IMG_URL from "../../utils/constants.js"

const ResCard = (props) => {

  let { resData } = props;

  return (
    <div className='border-1 border-black w-50 m-5 p-2'>
      <img src={IMG_URL} className='w-50 h-50 object-fill' alt="image" />
      <h1>{resData.data.name}</h1>
      <h1 className="text-gray-500">{resData.data.cuisines.join(", ")}</h1>
      <h1>{resData.data.avgRating}</h1>
      <h1>{resData.data.deliveryTime} min</h1>
      <h1 className="font-bold">{resData.data.costForTwo / 100}</h1>
    </div>
  )
}

export default ResCard
