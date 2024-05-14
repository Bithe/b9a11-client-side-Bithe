import { useContext, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const AddQueries = () => {
  const { user } = useContext(AuthContext);
  const [dateTime, setDateTime] = useState("");

  const handleAddQueries = async (e) => {
    e.preventDefault();
    console.log(user.email, user.displayName);

    // get the email a& name from firebase
    const email = user.email;
    const userName = user.displayName;
    const userPhoto = user?.photoURL;
    const currentDateTime = new Date().toISOString();

    // get the values from input filed
    const productName = e.target.productName.value;
    const productBrand = e.target.productBrand.value;
    const productImage = e.target.productImage.value;
    const queryTitle = e.target.queryTitle.value;
    const boycottingReason = e.target.boycottingReason.value;

    const addQueriesInfo = {
      productName,
      productBrand,
      productImage,
      queryTitle,
      boycottingReason,

      addQueriesUserInfo: {
        email,
        userName,
        userPhoto,
        dateTime: currentDateTime,
        recommendationCount: 0,
      },
    };

    console.log(addQueriesInfo);

    //MAKE THE API
    try {
      // Send the form data to the backend server
      const { data } = await axios.post(
        "https://prod-swap-hub-server.vercel.app/queries",
        addQueriesInfo
      );
      console.log(data);
      toast("Query added successfully!");
    } catch (error) {
      console.error("Error adding query:", error);
      toast.error("Error adding query. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg my-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Add Query
      </h2>
      <form onSubmit={handleAddQueries} id="queryForm">
        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-400 mb-2">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Enter product name"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          ></input>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-400 mb-2">
            Product Brand
          </label>
          <input
            type="text"
            id="productBrand"
            name="productBrand"
            placeholder="Enter product brand"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          ></input>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-400 mb-2">
            Product Image URL
          </label>
          <input
            type="url"
            id="productImage"
            name="productImage"
            placeholder="Enter product image URL"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          ></input>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-400 mb-2">
            Query Title
          </label>
          <input
            type="text"
            id="queryTitle"
            name="queryTitle"
            placeholder="Enter query title"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          ></input>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-400 mb-2">
            Boycotting Reason Details
          </label>
          <textarea
            id="boycottingReason"
            name="boycottingReason"
            placeholder="Enter boycotting reason details"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        <input type="hidden" id="dateTime" name="dateTime" value={dateTime} />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Add Query
        </button>
      </form>
    </div>
  );
};

export default AddQueries;
