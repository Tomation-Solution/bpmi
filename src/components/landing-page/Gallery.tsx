import Image from "next/image";
import PLink from "../PLink";
import styles from "../style";
// Import Swiper React components
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Gallery = () => {
  return (
    <div className={`flex flex-col justify-center w-full ${styles.paddingY}`}>
      <h3 className={`text-center text-primary ${styles.heading3} mb-10`}>
        GALLERY
      </h3>
      <div className="flex flex-col xl:flex-row justify-between md:justify-around">
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            // centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            className="mySwiper"
          >
            {[...new Array(6)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="h-[400px] w-full">
                  <Image
                    src={`/gallery (${index + 1}).jpg`}
                    alt={`Gallery image ${index + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex justify-center">
        <PLink
          text="Learn More"
          href="gallery"
          styles="bg-primary text-white mt-8 p-4 "
        />
      </div>
    </div>
  );
};

export default Gallery;
