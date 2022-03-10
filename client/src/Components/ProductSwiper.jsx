import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper css - not sure working not
import "swiper/css/bundle";

const ProductSwiper = (props) => {
  const productPhotos = [
    "https://4.img-dpreview.com/files/p/articles/2447647693/top_camera_backpacks_2020.jpeg",
    "https://www.cycletogo.com/wp-content/uploads/2016/07/brompton_bike_logo_black.jpg",
    "https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/445053/item/sggoods_08_445053.jpg?width=1600&impolicy=quality_75",
  ];
  const allProductPhotos = productPhotos.map((photo, index) => {
    return (
      <SwiperSlide key={index}>
        <img
          src={photo}
          alt={"bags and bike"}
          className=" p-8 h-full w-auto aspect-auto m-auto "
        />
      </SwiperSlide>
    );
  });

  return (
    <div className=" h-full">
      <div className=" w-full h-full pt-20">
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
          spaceBetween={30}
          slidesPerGroup={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={false}
          keyboard={{ enabled: true }}
          mousewheel={false}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="h-full "
        >
          {allProductPhotos}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSwiper;
