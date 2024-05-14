import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const AddARecommendation = () => {
  const { user } = useContext(AuthContext);

  const query = useLoaderData();
  console.log(query);

  const {
    addQueriesUserInfo: {
      email,
      userName,
      userPhoto,
      dateTime,
      recommendationCount,
    },
  } = query;

  const handleAddRecommendation = async (e) => {
    e.preventDefault();

    if (user && user.email === email) {
      return toast("Not Permitted! You cant recommend in your own post.");
    }

    // QUERY POSTED ID
    const queryId = query._id;
    // get the email a& name from firebase
    const recommendedUserEmail = user.email;
    const recommendedUserUserName = user.displayName;
    // get the values from input filed
    const recommendationQueryTitle = e.target.recommendationQueryTitle.value;
    const recommendedProductName = e.target.recommendedProductName.value;
    const recommendedProductImage = e.target.recommendedProductImage.value;
    const recommendationReason = e.target.recommendationReason.value;
    const recommendationPostedTimestamp = new Date().toISOString();

    const recommendationData = {
      recommendedUserEmail,
      recommendedUserUserName,
      recommendationQueryTitle,
      recommendedProductName,
      recommendedProductImage,
      recommendationReason,
      recommendationPostedTimestamp,

      queryPosterUserInf: {
        queryId,
        email,
        userName,
      },
    };

    console.log(recommendationData);

    //MAKE THE API
    try {
      // Send the form data to the backend server
      const { data } = await axios.post(
        "prod-swap-hub-server.vercel.app/recommendation",
        recommendationData
      );
      console.log(data);
      toast("Recommendation added successfully!");
    } catch (error) {
      console.error("Error adding query:", error);
      toast("Error adding Recommendation. Please try again later.");
    }
  };

  return (
    <div>
      <section>
        <div className="flex flex-col md:flex-row justify-around gap-5 items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto my-8 border ">
          {/* USER INFOR*/}
          <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent ">
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={userPhoto}
                alt=""
              ></img>

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                Posted User Info
              </h1>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                Name: {userName}{" "}
              </p>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                Email: {email}{" "}
              </p>

              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                Posted Date: {new Date(dateTime).toLocaleString()}{" "}
              </p>
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                Total Recommended: {recommendationCount}{" "}
              </p>

              <div className="flex mt-3 -mx-2"></div>
            </div>
          </div>

          {/*RECOMMENDATION FORM*/}
          <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
            <h2 className="text-lg font-semibold text-gray-700 capitalize ">
              Add A Recommendation{" "}
            </h2>

            <form onSubmit={handleAddRecommendation}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 " htmlFor="price">
                    Recommendation Title
                  </label>
                  <input
                    id="recommendationQueryTitle"
                    type="text"
                    name="recommendationQueryTitle"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="emailAddress">
                    Recommended product Name
                  </label>
                  <input
                    id="recommendedProductName"
                    type="text"
                    name="recommendedProductName"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="comment">
                    Recommended Product Image
                  </label>
                  <input
                    type="url"
                    id="recommendedProductImage"
                    name="recommendedProductImage"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-700 " htmlFor="comment">
                    Recommendation reason
                  </label>
                  <textarea
                    id="recommendationReason"
                    name="recommendationReason"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Add Recommendation
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>

     
    </div>
  );
};

export default AddARecommendation;
