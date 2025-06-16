import ResCard from "./ResCard";
import { useEffect, useState } from "react";

function Body() {
  const [rating, setRating] = useState(0);
  const [filterApplied, setFilterApplied] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products");

    const json = await data.json();
    const products = json.products;

    setNewData(products);
  };

  console.log(newData);

  return (
    <div>
      <div className="flex gap-5 items-center">
        <div className="px-5 pt-5 flex gap-3">
          <input className="border-1 border-black" type="text" />
          <button className="bg-gray-300 px-4 rounded-sm py-1 cursor-pointer">
            Search
          </button>
        </div>
        <div className="flex items-center justify-center pt-5 gap-2">
          <input
            onChange={(e) => setRating(e.target.value)}
            type="number"
            className="border-1 border-black py-1"
          />
          <button
            onClick={() => {
              const filterProductList = newData.filter(
                (res) => res.rating >= rating
              );

              setFilterData(filterProductList);

              if (rating > 0) setFilterApplied(true);
              else setFilterApplied(false);
            }}
            className="bg-amber-500 px-5 py-1 border-1 border-black cursor-pointer"
          >
            Filter
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterApplied
          ? filterData.map((res) => <ResCard key={res.id} resData={res} />)
          : newData.map((res) => <ResCard key={res.id} resData={res} />)}
      </div>
    </div>
  );
}

export default Body;
