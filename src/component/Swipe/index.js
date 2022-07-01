import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const InitSwipe = ({ ...props }) => (
  <Swiper
    spaceBetween={50}
    slidesPerView={1.6}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {props.children}
  </Swiper>
);

export const SwipeSlides = ({ children, index }) => {
  return <SwiperSlide key={index}>{children}</SwiperSlide>;
};

export const SwipeSekeleton = () => {
  return [1, 2, 3].map((it, index) => (
    <SwiperSlide key={index}>
      <div className="mt-12 w-56 animate-pulse flex-row items-center justify-center space-x-1 rounded-xl">
        <div className="h-48 w-full rounded-xl bg-gray-300 "></div>
        <div className="flex flex-col space-y-2 pt-2">
          <div className="h-3 w-11/12 rounded-sm bg-gray-300 "></div>
          <div className="h-2 w-3/6 rounded-sm bg-gray-300 "></div>
        </div>
      </div>
    </SwiperSlide>
  ));
};
