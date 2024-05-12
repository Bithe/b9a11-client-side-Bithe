import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import axios from "axios";
import UpdateBtn from "./UpdateBtn";
import { Link } from "react-router-dom";
import DeleteBtn from "./DeleteBtn";
import NoResultFound from "./NoResultFound";

const AllMyQueries = () => {
  const { user } = useContext(AuthContext);
  const [allMyQueries, setAllMyQueries] = useState([]);
  console.log(allMyQueries);

  useEffect(() => {
    const getAllMyQueries = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/my-queries/${user.email}`
        );
        setAllMyQueries(data);
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };
    getAllMyQueries();
  }, [user]);

  console.log(allMyQueries);
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container p-6 mx-auto space-y-6 sm:space-y-12  ">
        {/* CARDS */}
        {allMyQueries.length === 0 ? (
          <section>
            <NoResultFound></NoResultFound>
          </section>
        ) : (
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {allMyQueries.map((myQuery) => (
              <div
                key={myQuery._id}
                className="max-w-2xl px-8 py-4 my-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                  {new Date(myQuery.addQueriesUserInfo.dateTime).toLocaleString()}{" "}
                  </span>
                  <Link to={`/query-details/${myQuery._id}`}
                    className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                    role="button"
                  >
                    View Details
                  </Link>
                </div>

                <div className="mt-2">
                  <a
                    href="#"
                    className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
                    role="link"
                  >
                    Query Title: {myQuery.queryTitle}{" "}
                  </a>

                  <h1 className="font-bold mt-2">
                    Product Name: {myQuery.productName}
                  </h1>
                  <p title={myQuery.boycottingReason} className="mt-2 text-gray-600 dark:text-gray-300">
                    {myQuery.boycottingReason.substring(0,90)}....
                  </p>
                </div>

                <div className="flex items-center justify-center mt-4 flex-grow">
                  {/* <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    role="link"
                  >
                    Update{" "}
                  </a> */}

                  <div className="container-btn ">
                    {" "}
                    <Link to={`/update-my-queries/${myQuery._id}`}>
                      {" "}
                      <UpdateBtn></UpdateBtn>
                    </Link>
                    <div className="/">
                      <DeleteBtn></DeleteBtn>{" "}
                    </div>{" "}
                  </div>

                  <div className="flex items-center">
                    <img
                      className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      src={myQuery.productImage}
                      alt="avatar"
                    ></img>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CARDS */}
      </div>
    </section>
  );
};

export default AllMyQueries;
