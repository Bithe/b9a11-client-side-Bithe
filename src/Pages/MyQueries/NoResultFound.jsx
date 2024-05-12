import { Link } from "react-router-dom";
import anyQ from "../../assets/images/any_q.jpg";

const NoResultFound = () => {
  return (
    <div>
      <section className=" text-black dark:bg-gray-100  dark:text-gray-800">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Oops! No queries found.
            <span className="text-violet-400 dark:text-violet-600">
              It seems there are no queries available at the moment. Be the
              first to{" "}
            </span>
            ask a question!
          </h1>
          <img src={anyQ}></img>

          <Link to="/add-queries">
            {" "}
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                Add Query
              </button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NoResultFound;
