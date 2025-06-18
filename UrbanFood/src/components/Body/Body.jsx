import Shimmer from "../Shimmer-UI/Shimmer";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { DATA_API } from "../../utils/constants";

function Body() {
  const [rating, setRating] = useState(0);
  const [filterApplied, setFilterApplied] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [search, setSearch] = useState("");

  // fetch API
  useEffect(() => {
    fetchData();
  }, [search]);

  const fetchData = async () => {
    const data = await fetch(DATA_API);

    const json = await data.json();
    const products = json.products;

    setNewData(products);
  };

  return newData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex gap-5 items-center">
        <div className="px-5 pt-5 flex gap-3">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="border-1 border-black"
            type="text"
            value={search}
          />
          <button
            onClick={() => {
              const searchProduct = newData.filter((res) =>
                res.brand.toLowerCase().includes(search.toLowerCase())
              );
              setNewData(searchProduct);
            }}
            className="bg-gray-300 px-4 rounded-sm py-1 cursor-pointer"
          >
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
          ? filterData.map((res) => (
              <Link key={res.id} to={"/productpage/" + res.id}>
                <ResCard resData={res} />
              </Link>
            ))
          : newData.map((res) => (
              <Link key={res.id} to={"/productpage/" + res.id}>
                <ResCard resData={res} />
              </Link>
            ))}
      </div>
    </div>
  );
}

export default Body;
