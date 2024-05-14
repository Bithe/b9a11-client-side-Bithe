import { FaProductHunt, FaTrademark, FaImage, FaQuestionCircle, FaExclamationCircle } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { useContext } from 'react';



const UpdateMyQueries = () => {
  const { user } = useContext(AuthContext);

  const navigate= useNavigate();

  const query = useLoaderData();
  console.log(query);

  const {_id, productName } = query;
    return (
      <section className='container mx-auto lg:px-20 lg:py-8 '>
          <div className="mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg my-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Update Your Query
        </h2>
        <p></p>
        <form id="queryForm">
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
              defaultValue={query.productBrand}
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
              defaultValue={query.productImage}
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
              defaultValue={query.queryTitle}
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
              defaultValue={query.boycottingReason}
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