import Shimmer from "../Shimmer-UI/Shimmer";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { DATA_API } from "../../utils/constants";
import useShowProducts from "../../utils/useShowProducts";

function Body() {
  const [rating, setRating] = useState(0);
  const [filterApplied, setFilterApplied] = useState(false);
  const [filterData, setFilterData] = useState([]);
  // const [newData, setNewData] = useState([]);
  const [search, setSearch] = useState("");

  const newData = useShowProducts();

  return newData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex gap-5 items-center">
        {/* Search */}
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
              setFilterData(searchProduct);
              setFilterApplied(true);
            }}
            className="bg-gray-300 px-4 rounded-sm py-1 cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Filter */}
        <div className="flex items-center justify-center pt-5 gap-2">
          <input
            onChange={(e) => setRating(e.target.value)}
            type="number"
            className="border-1 border-black py-1"
          />
          <button
            onClick={() => {
              let filterProductList = [];
              const originalFilterList = filterData;

              if (filterData) {
                filterProductList = filterData.filter(
                  (res) => res.rating >= rating
                );
              } else {
                filterProductList = newData.filter(
                  (res) => res.rating >= rating
                );
              }

              // const filterProductList = newData.filter(
              //   (res) => res.rating >= rating
              // );

              // if (filterData) return console.log("there is a product!");
              console.log(originalFilterList);

              // setFilterApplied(true);
              if (rating > 0) {
                setFilterApplied(true);
                setFilterData(filterProductList);
                console.log("I am here");
              } else if (rating <= 0) {
                console.log("yooo");
                setFilterApplied(true);
                setFilterData(originalFilterList);
              } else setFilterApplied(false);
            }}
            className="bg-amber-500 px-5 py-1 border-1 border-black cursor-pointer"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Product Cards */}
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
