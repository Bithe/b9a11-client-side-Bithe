// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section
            className="py-6 dark:bg-violet-600 dark:text-gray-50 h-[38rem] rounded-xl"
            style={{
              backgroundImage: "url('https://i.ibb.co/J7K29nx/banners1.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
              <h1 className="text-5xl font-bold leading-none text-center">
                Something totally different
              </h1>
              <p className="pt-2 pb-8 text-xl font-medium text-center">
                Eum omnis itaque harum at quae sequi unde similique alias
                asperiores totam. Ex cumque maxime harum doloremque, tempore nam
                fugiat aspernatur rerum ipsa unde est modi commodi molestias
                maiores eveniet eius esse asperiores neque dicta ea quisquam?
                Excepturi sapiente officiis explicabo ab?
              </p>
              <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">
                Learn more
              </button>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <section
            className="py-6 dark:bg-violet-600 dark:text-gray-50 h-[38rem] rounded-xl"
            style={{
              backgroundImage: "url('https://i.ibb.co/FW7FPmS/banners2.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
              <h1 className="text-5xl font-bold leading-none text-center">
                Something totally different
              </h1>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <section
            className="py-6 dark:bg-violet-600 dark:text-gray-50 h-[38rem] rounded-xl"
            style={{
              backgroundImage: "url('https://i.ibb.co/WnKthtv/banners3.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
              <h1 className="text-5xl font-bold leading-none text-center">
                Something totally different
              </h1>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <section
            className="py-6 dark:bg-violet-600 dark:text-gray-50 h-[38rem] rounded-xl"
            style={{
              backgroundImage: "url('https://i.ibb.co/Lr1dbNX/banners4.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
              <h1 className="text-5xl font-bold leading-none text-center">
                Something totally different
              </h1>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
