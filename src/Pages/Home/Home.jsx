

import { Link } from "react-router-dom";
import SwiperCarousel from "../../components/Swiper/SwiperCarousel";
import RecentQueries from "./RecentQueries/RecentQueries";
import { Helmet } from "react-helmet-async";
import TopUsers from "./TopUsers/TopUsers";
import TrailTales from "./TrailTales/TrailTales";


import '../../components/Navbar/navbar.css';


const Home = () => {
  return (
    <div className="container mx-auto lg:px-20 lg:py-8">
      <Helmet>
        <title>ProdSwap | Home</title>
      </Helmet>
      <section className="my-8">
        <SwiperCarousel></SwiperCarousel>
      </section>

      {/* TINNY BANNER - CALL TO ACTION BANNER */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 flex items-center justify-between rounded-lg shadow-md">
        <div>
          <h2 className="text-2xl font-semibold">Unleash Your Curiosity!</h2>
          <p className="text-lg mt-2">
            Unlock a world of knowledge. Explore all queries.
          </p>
        </div>
        <Link to="/queries">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-purple-100 hover:text-purple-800 transition duration-300">
            Start Exploring
          </button>
        </Link>
      </div>

      {/* RECENT QUERIES */}

      <section className="my-10">
        <div className="text-center my-8">
          <h3 className="text-4xl font-bold">
            Latest Hiking Queries: Unraveling the Trails
          </h3>

          <p className="space-y-8 m-8">
            Are you ready to delve into the world of hiking queries?
            <br /> Join us as we explore the most intriguing questions, seek
            expert advice, and share insights from fellow hikers.
          </p>
        </div>
        <RecentQueries></RecentQueries>
      </section>

      {/* TOP USERS  */}

      <section className="my-10">
        <div className="text-center my-8">
          <h3 className="text-4xl font-bold">
            Explore Our Most Active Hikers: Top Contributors
          </h3>

          <p className="space-y-8 m-8">
            Discover the driving force behind our vibrant hiking community – our
            top contributors!
            <br /> These dedicated individuals have shared their knowledge,
            experiences, and passion for hiking
          </p>
        </div>
        <TopUsers></TopUsers>{" "}
      </section>
      {/* TOP USERS  */}

      <section className="my-10">
        <div className="text-center my-8">
          <h3 className="text-4xl font-bold">
          Discover Your Adventure
          </h3>

          <p className="space-y-8 m-8">
          Find the Gear You Need for Your Next Hiking Expedition
          </p>
        </div>
        <TrailTales></TrailTales>{" "}
      </section>
    </div>
  );
};

export default Home;
