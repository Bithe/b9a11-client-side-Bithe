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
    </div>
  );
};

export default Home;
