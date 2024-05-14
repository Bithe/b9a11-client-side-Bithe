import { FaProductHunt, FaTrademark, FaImage, FaQuestionCircle, FaExclamationCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';



const UpdateMyQueries = () => {
  const { user } = useContext(AuthContext);

  // const navigate = useNavigate();

  const query = useLoaderData();
  console.log(query);

  const {_id, productName, productBrand, productImage, queryTitle, boycottingReason } = query;


  const handleUpdateMyQuery = async (e) => {
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

    const updatedQueriesInfo = {
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

    console.log(updatedQueriesInfo);

    //MAKE THE API
    try {
      // Send the form data to the backend server
      const { data } = await axios.put(
        `https://prod-swap-hub-server.vercel.app/query/${_id}`,
        updatedQueriesInfo
      );
      console.log(data);
      toast("Query Updated successfully!");
    } catch (error) {
      console.error("Error Updating query:", error);
      toast.error("Error updating query. Please try again later.");
    }
  };
    return (
      <section className='container mx-auto lg:px-20 lg:py-8 '>
          <div className="mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg my-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Update Your Query
        </h2>
        <p></p>
        <form onSubmit={handleUpdateMyQuery} id="queryForm">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <FaProductHunt className="text-gray-700 dark:text-gray-400 mr-2" />
              <input

              defaultValue={productName}
                type="text"
                id="productName"
                name="productName"
                placeholder="Product Name"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex items-center">
              <FaTrademark className="text-gray-700 dark:text-gray-400 mr-2" />
              <input
              defaultValue={productBrand}
                type="text"
                id="productBrand"
                name="productBrand"
                placeholder="Product Brand"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex items-center">
              <FaImage className="text-gray-700 dark:text-gray-400 mr-2" />
              <input
              defaultValue={productImage}
                type="url"
                id="productImage"
                name="productImage"
                placeholder="Product Image URL"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-700 dark:text-gray-400 mr-2" />
              <input
              defaultValue={queryTitle}
                type="text"
                id="queryTitle"
                name="queryTitle"
                placeholder="Query Title"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="flex items-center">
              <FaExclamationCircle className="text-gray-700 dark:text-gray-400 mr-2" />
              <textarea
              defaultValue={boycottingReason}
                id="boycottingReason"
                name="boycottingReason"
                placeholder="Boycotting Reason Details"
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
          </div>
          <input type="hidden" id="dateTime" name="dateTime"  />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Update Query
          </button>
        </form>
      </div>
      </section>
    );
};

export default UpdateMyQueries;