import axios from "axios";
import { useEffect, useState } from "react";

const RecentQueries = () => {
  const [allQueries, setAllQueries] = useState([]); 
  console.log(allQueries);

  useEffect(() => {
    const getAllQueries = async () => {
      try {
        const { data } = await axios.get(
          `prod-swap-hub-server.vercel.app/recent-queries`, {withCredentials:true}
        );
        setAllQueries(data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };
    getAllQueries();
  }, []);

   // Filter the queries to display only the most recent 6-8 posts
   const recentPosts = allQueries.slice(0, 8); 

  return (
<div className="my-24 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 flex-grow">
      {recentPosts.map((query) => (
        <div
          key={query._id}
          className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"
        >
          <div className="flex justify-center -mt-16 md:justify-end">
            <img
              className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src={query.addQueriesUserInfo?.userPhoto || "https://i.ibb.co/pKH63n5/user.png"}
            ></img>
          </div>
          <div className="flex justify-end mt-4">
            <a
              href="#"
              className="text-lg font-medium text-blue-600 dark:text-blue-300"
              role="link"
            >
          {query.addQueriesUserInfo.userName.toUpperCase()}
            </a>
          </div>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
         Title: {query.queryTitle}
          </h2>
          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
          
          </h2>
          <h2 className="mt-2 font-semibold text-gray-800 dark:text-white md:mt-0">
          {new Date(query.addQueriesUserInfo.dateTime).toLocaleDateString()}
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          {query.boycottingReason}
          </p>

      

          {/* ANOTHER CARD */}
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg group">
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="175"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                y="107.48"
                width="152"
                height="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                style={{
                  background: "radial-gradient(black, transparent 60%)",
                  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                  opacity: 0.2,
                }}
              ></div>
              <img
                className="relative w-40 rounded-lg"
                src={query?.productImage}
                alt=""
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">{query.productBrand}</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">{query.productName}</span>
               
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      ))}
    </div>
  );
};

export default RecentQueries;
