import { useState } from "react";

const Review = ({ reviewData }) => {
  const [showData, setShowData] = useState(false);

  return (
    <div className="flex flex-col mb-10 py-4 bg-gray-200 p-5 rounded-lg">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="p-2 text-xl font-bold">Reviews</h1>
        <button
          onClick={() => setShowData(!showData)}
          className="bg-black text-white p-2 px-4 rounded-lg cursor-pointer hover:bg-gray-700"
        >
          {showData ? "Collapse" : "Expand"}
        </button>
      </div>

      {/* Accordian Body */}
      {showData && (
        <div className="flex flex-col gap-2 p-2">
          <span className="text-md font-bold">
            Name: {reviewData?.reviewerName}
          </span>
          <span>Comment: {reviewData?.comment} </span>
          <span>Rating: {reviewData?.rating} </span>
        </div>
      )}
    </div>
  );
};

export default Review;
