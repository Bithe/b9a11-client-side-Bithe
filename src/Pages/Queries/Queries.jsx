import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
  const allQueries = useLoaderData();
  const [layout, setLayout] = useState("grid");

  const toggleLayout = () => {
    setLayout(layout === "grid" ? "list" : "grid");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center mb-4 ">
        <button
          onClick={toggleLayout}
          className="px-3 py-1 bg-gray-500 text-white rounded-md"
        >
          {layout === "grid" ? "Switch to List" : "Switch to Grid"}
        </button>
      </div>

      <div
        className={`grid ${
          layout === "grid"
            ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3"
            : ""
        } gap-4`}
      >
        {allQueries.map((query) => (
          <div
            key={query.id}
            className="rounded-lg shadow-md sm:w-96 bg-gradient-to-r from-[#271c53] to-[#19547b] text-gray-100 dark:text-gray-800 p-4"
          >
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center space-x-2">
                <img
                  src={query.addQueriesUserInfo.userPhoto}
                  alt=""
                  className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 dark:bg-gray-500 border-gray-700 dark:border-gray-300"
                />
                <div className="-space-y-1">
                  <h2 className="text-sm font-semibold leading-none">
                    {query.addQueriesUserInfo.userName}{" "}
                  </h2>
                  <span className="inline-block text-xs leading-none text-gray-400 dark:text-gray-600">
                    <h2>Posted: {query.addQueriesUserInfo.dateTime}</h2>
                  </span>
                </div>
              </div>
            </div>
            <img
              src={query.productImage}
              alt=""
              className="object-cover object-center w-full h-72 bg-gray-500 dark:bg-gray-500"
            />
            <div className="p-3  ">
              <div className="flex items-center justify-between ">
                <div className="flex items-center space-x-3 ">
                  <h2>
                    Total Recommanded:{" "}
                    {query.addQueriesUserInfo.recommendationCount}
                  </h2>
                </div>
                <button
                  type="button"
                  title="Bookmark post"
                  className="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                  </svg>
                </button>
              </div>
              {/* <div className="flex flex-wrap items-center pt-3 pb-1"></div> */}
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="text-base font-semibold">
                    Q: {query.queryTitle}{" "}
                  </span>
                </p>
                <h2>Product Name: {query.productName}</h2>
                <h2>Product Brand: {query.productBrand}</h2>
                <h2>Alternation Reason: {query.boycottingReason}</h2>
               
              </div>
              <div className="my-8 flex justify-center ">
              <Link to={`/query-details/${query._id}`} className="">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-purple-100 hover:text-purple-800 transition duration-300">
                 Recommend
                </button>
              </Link>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queries;
