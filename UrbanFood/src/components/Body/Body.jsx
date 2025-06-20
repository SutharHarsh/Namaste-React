// import Shimmer from "../Shimmer-UI/Shimmer";
// import ResCard from "./ResCard";
// import { useEffect, useState } from "react";
// import { Link } from "react-router";
// import { DATA_API } from "../../utils/constants";
// import useShowProducts from "../../utils/useShowProducts";

// function Body() {
//   const [rating, setRating] = useState(0);
//   const [filterApplied, setFilterApplied] = useState(false);
//   const [filterData, setFilterData] = useState([]);
//   const [newData, setNewData] = useState([]);
//   const [search, setSearch] = useState("");

//   const data = useShowProducts(search);

//   useEffect(() => {
//     if (data && data.length > 0) {
//       setNewData(data);
//     }
//   }, [data]);

//   return newData.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div>
//       <div className="flex gap-5 items-center">
//         {/* Search */}
//         <div className="px-5 pt-5 flex gap-3">
//           <input
//             onChange={(e) => setSearch(e.target.value)}
//             className="border-1 border-black"
//             type="text"
//             value={search}
//           />
//           <button
//             onClick={() => {
//               let searchProduct = [];

//               if (filterData.length > 0) {
//                 searchProduct = filterData.filter((res) =>
//                   res.brand.toLowerCase().includes(search.toLowerCase())
//                 );
//                 setFilterData(searchProduct);
//               } else {
//                 searchProduct = newData.filter((res) =>
//                   res.brand.toLowerCase().includes(search.toLowerCase())
//                 );
//                 setNewData(searchProduct);
//               }
//             }}
//             className="bg-gray-300 px-4 rounded-sm py-1 cursor-pointer"
//           >
//             Search
//           </button>
//         </div>

//         {/* Filter */}
//         <div className="flex items-center justify-center pt-5 gap-2">
//           <input
//             onChange={(e) => setRating(e.target.value)}
//             type="number"
//             className="border-1 border-black py-1"
//           />
//           <button
//             onClick={() => {
//               let filterProductList = [];
//               if (search.length === 0) {
//                 filterProductList = newData.filter(
//                   (res) => res.rating >= rating
//                 );
//               }

//               setFilterData(filterProductList);
//               if (rating > 0) setFilterApplied(true);
//               else setFilterApplied(false);
//             }}
//             className="bg-amber-500 px-5 py-1 border-1 border-black cursor-pointer"
//           >
//             Filter
//           </button>
//         </div>
//       </div>

//       {/* Product Cards */}
//       <div className="flex flex-wrap">
//         {filterApplied
//           ? filterData.map((res) => (
//               <Link key={res.id} to={"/productpage/" + res.id}>
//                 <ResCard resData={res} />
//               </Link>
//             ))
//           : newData.map((res) => (
//               <Link key={res.id} to={"/productpage/" + res.id}>
//                 <ResCard resData={res} />
//               </Link>
//             ))}
//       </div>
//     </div>
//   );
// }

// export default Body;

import Shimmer from "../Shimmer-UI/Shimmer";
import ResCard from "./ResCard";
import { useState, useMemo } from "react";
import { Link } from "react-router";
import useShowProducts from "../../utils/useShowProducts";

function Body() {
  // Simplified state - only store filter criteria, not filtered data
  const [rating, setRating] = useState(0);
  const [search, setSearch] = useState("");

  // Get all products from custom hook
  const allProducts = useShowProducts();

  // Derive filtered products from state - no manual button clicking needed
  const filteredProducts = useMemo(() => {
    let result = allProducts;

    // Apply rating filter
    if (rating > 0) {
      result = result.filter((product) => product.rating >= rating);
    }

    // Apply search filter
    if (search.trim()) {
      result = result.filter((product) =>
        product.brand.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result;
  }, [allProducts, rating, search]); // Automatically recalculates when any dependency changes

  // Event handlers - much simpler
  const handleSearchChange = (e) => {
    setSearch(e.target.value); // Real-time filtering
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value)); // Real-time filtering
  };

  const clearAllFilters = () => {
    setSearch("");
    setRating(0);
  };

  // Loading state
  if (allProducts.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      {/* Filter Controls */}
      <div className="flex gap-5 items-center p-5 bg-gray-50 rounded-lg m-4">
        {/* Search Input - Real-time filtering */}
        <div className="flex gap-3 items-center">
          <label className="font-medium">Search:</label>
          <input
            onChange={handleSearchChange}
            className="border border-gray-300 px-3 py-2 rounded-md"
            type="text"
            value={search}
            placeholder="Search products..."
          />
        </div>

        {/* Rating Filter - Real-time filtering */}
        <div className="flex items-center gap-2">
          <label className="font-medium">Min Rating:</label>
          <input
            onChange={handleRatingChange}
            type="number"
            min="0"
            max="5"
            className="border border-gray-300 px-2 py-1 rounded-md w-20"
            value={rating || ""}
            placeholder="0"
          />
        </div>

        {/* Clear Filters Button */}
        {(search || rating > 0) && (
          <button
            onClick={clearAllFilters}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Results Summary */}
      <div className="px-5 pb-3">
        <p className="text-gray-600">
          Showing{" "}
          <span className="font-semibold">{filteredProducts.length}</span> of{" "}
          <span className="font-semibold">{allProducts.length}</span> products
          {search && (
            <span>
              {" "}
              matching "<strong>{search}</strong>"
            </span>
          )}
          {rating > 0 && (
            <span>
              {" "}
              with rating ≥ <strong>{rating}</strong>
            </span>
          )}
        </p>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap p-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product.id} to={"/productpage/" + product.id}>
              <ResCard resData={product} />
            </Link>
          ))
        ) : (
          <div className="w-full text-center py-10">
            <p className="text-gray-500 text-lg">No products found</p>
            <p className="text-gray-400 mb-4">
              Try adjusting your search or rating filter
            </p>
            <button
              onClick={clearAllFilters}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Body;
