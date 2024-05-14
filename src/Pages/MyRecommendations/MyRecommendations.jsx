import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const [allMyRecommendation, setAllMyRecommendation] = useState([]);
  console.log(allMyRecommendation);

  useEffect(() => {
   
    getAllMyRecommendation();
  }, [user]);
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


 // DELETE FUNC
const handleDelete = async (id) => {
  console.log(id);

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`http://localhost:5000/recommendation/${id}`);
        const data = response.data;
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Craft has been deleted.",
            icon: "success"
          });
          getAllMyRecommendation(); // Assuming this function retrieves updated query list
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  });
};
  return (
    <div className="container mx-auto lg:px-20 lg:py-8">
        <Helmet>
        <title>ProdSwap | My Recommendations</title>
      </Helmet>
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
                        <td onClick={() => handleDelete(recommendation._id)} className="px-4 py-4  text-sm whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-white  dark:bg-gray-800 bg-red-600">
                            <button className="text-sm font-semibold">Delete</button>
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
