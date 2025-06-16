// import IMG_URL from "../../utils/constants.js"

const ResCard = (props) => {

  let { resData } = props;

  return (
    <div className='border-1 border-black w-50 m-5 p-2'>
      <img src={resData.images} className='w-50 h-50 object-fill' alt="image" />
      <h1>{resData.brand}</h1>
      <h1 className="text-gray-500">{resData.description}</h1>
      <h1>{resData.rating}</h1>
      <h1 className="font-bold">{resData.price}</h1>
    </div>
  )
}

export default ResCard
