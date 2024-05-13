// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Link } from "react-router-dom";
import SwiperCarousel from "../../components/Swiper/SwiperCarousel";
import RecentQueries from "./RecentQueries/RecentQueries";

const Home = () => {
  return (
    <div className="container mx-auto lg:px-20 lg:py-8">
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
          <h3 className="text-4xl font-bold">All Reco</h3>

          <p className="space-y-8 m-8">
            Italian cuisine is renowned for its rich flavors and comforting
            dishes, and pasta is undoubtedly one of its most beloved creations.{" "}
            <br /> Whether it is a hearty bowl of spaghetti Bolognese or
            delicate filled with creamy ricotta, Italian pasta dishes never fail
            to tantalize the taste buds.{" "}
          </p>
        </div>
        <RecentQueries></RecentQueries>
      </section>
      
    </div>
  );
};

export default Home;
