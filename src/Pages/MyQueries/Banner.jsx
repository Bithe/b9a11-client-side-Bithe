import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <header className="bg-white dark:bg-gray-900 border rounded-lg border-blue-200">
        <nav className="relative bg-white dark:bg-gray-900">
          {/* Nav content */}
        </nav>

        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Add it here and let the community help <br /> you{" "}
                  <span className="text-blue-500 ">find the answer!</span>
                </h1>

                <Link to="/add-queries">
                  <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500 font-bold">
                    Add Queries
                  </button>


                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://merakiui.com/images/components/Catalogue-pana.svg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
