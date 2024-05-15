import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Queries = () => {
  const allQueries = useLoaderData();
  const [layout, setLayout] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleLayout = () => {
    setLayout(layout === "grid" ? "list" : "grid");
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredQueries = allQueries.filter((query) =>
    query.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search */}

      <section className="mt-12 lg:mt-24">
        <div className="bg-teal-500 text-white -skew-y-1">
          <div className="container mx-auto skew-y-1">
            <div className="flex flex-col items-center py-10 text-center lg:py-20">
              <div className="w-full px-4 lg:w-1/2 lg:px-0">
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                    Looking for a solution?
                  </h2>
                  <p className="text-lg lg:text-xl opacity-80">
                    Search the forum for the answer to your question
                  </p>
                </div>

                <div className="mb-10">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        ></path>
                      </svg>
                    </div>

                    <form action="#" method="GET">
                      <input
                        value={searchQuery}
                        onChange={handleSearch}
                        type="search"
                        name="search"
                        placeholder="Search here for threads"
                        className="p-4 pl-10 text-gray-600 rounded w-full border-gray-100"
                      />
                    </form>
                  </div>
                </div>

                <div className="text-lg">
                  <p>
                    Cant find what youre looking for?
                    <br className="sm:hidden" />
                    <a href="#" className="border-b border-white pb-1">
                      Create a new thread
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toggle */}
      <div className="flex justify-center mb-4 my-16 ">
        <button
          onClick={toggleLayout}
          className="px-3 py-1 bg-gray-500 text-white rounded-md"
        >
          {layout === "grid" ? "Switch to List" : "Switch to Grid"}
        </button>
      </div>

      {/* Render queries */}
      <div
        className={`grid ${
          layout === "grid"
            ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : ""
        } gap-4`}
      >
        {filteredQueries.map((query) => (
          <div
            key={query.id}
            className="rounded-lg shadow-md sm:w-96 bg-gradient-to-r bg-teal-500 text-gray-100 dark:text-gray-800 p-4"
          >
            {/* Render query details */}
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
                  <span className="inline-block dark:text-gray-600">
                    <h2>
                      Posted:{" "}
                      {new Date(
                        query.addQueriesUserInfo.dateTime
                      ).toLocaleString()}{" "}
                    </h2>
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
                    Total Recommanded: {query.addQueriesUserInfo.recommendationCount}
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
