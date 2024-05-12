import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import axios from "axios";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [allMyRecommendation, setAllMyRecommendation] = useState([]);
  console.log(allMyRecommendation);

  useEffect(() => {
    const getAllMyRecommendation = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/my-recommendations/${user?.email}`
        );
        setAllMyRecommendation(data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };
    getAllMyRecommendation();
  }, [user]);
  return (
    <div className="container mx-auto lg:px-20 lg:py-8">
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Product Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Recommendation Title{" "}
                      </th>

                      <th scope="col" className="relative py-3.5 px-4">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {allMyRecommendation.map((recommendation) => (
                      <tr key={recommendation._id}>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {new Date(
                            recommendation.recommendationPostedTimestamp
                          ).toLocaleDateString()}{" "}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-8 h-8 rounded-full"
                              src={recommendation.recommendedProductImage}
                              alt=""
                            ></img>
                            <div>
                              <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                                {recommendation.recommendedProductName}{" "}
                              </h2>
                             
                            </div>
                          </div>
                        </td>
                        <td title={recommendation.recommendationQueryTitle} className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {recommendation.recommendationQueryTitle.substring(0,50)}....
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-100/60 dark:bg-gray-800">
                            <h2 className="text-sm font-semibold">Delete</h2>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyRecommendations;
