import { useLoaderData } from "react-router-dom";
import AddARecommendation from "../../components/AddARecommendation/AddARecommendation";
import AllRecommendation from "../../components/AllRecommendation";

const QueryDetails = () => {
  //     const { user } = useContext(AuthContext
  //     );

  //   const navigate= useNavigate();

  const query = useLoaderData();
  console.log(query);

  const {
    productImage,
    queryTitle,
    productName,
    productBrand,
    boycottingReason,
    addQueriesUserInfo: { dateTime, recommendationCount },
  } = query;
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
              src={productImage}
              alt=""
            ></img>
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-2xl font-semibold tracking-tight text-blue-500 xl:text-3xl dark:text-white">
              {queryTitle}{" "}
            </h2>

            <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
              {boycottingReason}
            </p>

            <div className="py-8 text-gray-500 dark:text-gray-300">
              <p className="py-1">
                Prodcut Name:{" "}
                <span className=" font-semibold ">{productName}</span>{" "}
              </p>
              <p className="py-1">
                Product Brand:{" "}
                <span className=" font-semibold ">{productBrand}</span>{" "}
              </p>
              <p className="py-1">
                Posted Date:{" "}
                <span className=" font-semibold ">
                  {" "}
                  {new Date(dateTime).toLocaleString()}{" "}
                </span>
              </p>
              <p className="py-1">
                Recommended:{" "}
                <span className=" font-semibold ">{recommendationCount}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADD A RECOMMENDATION AND USER INFO */}
      <section>
        <div className="text-center">
          <h3 className="text-4xl font-bold">Our Recipes</h3>

          <p className="space-y-8 m-8">
            Italian cuisine is renowned for its rich flavors and comforting
            dishes, and pasta is undoubtedly one of its most beloved creations.{" "}
            <br /> Whether it is a hearty bowl of spaghetti Bolognese or
            delicate filled with creamy ricotta, Italian pasta dishes never fail
            to tantalize the taste buds.{" "}
          </p>
        </div>

        <AddARecommendation></AddARecommendation>
      </section>

      {/* ALL RECOMMENDATIONS FOR THIS QUERY */}

      <section className="my-10">
        <div className="text-center">
          <h3 className="text-4xl font-bold">All Reco</h3>

          <p className="space-y-8 m-8">
            Italian cuisine is renowned for its rich flavors and comforting
            dishes, and pasta is undoubtedly one of its most beloved creations.{" "}
            <br /> Whether it is a hearty bowl of spaghetti Bolognese or
            delicate filled with creamy ricotta, Italian pasta dishes never fail
            to tantalize the taste buds.{" "}
          </p>
        </div>
        <AllRecommendation></AllRecommendation>
      </section>
    </div>
  );
};

export default QueryDetails;
