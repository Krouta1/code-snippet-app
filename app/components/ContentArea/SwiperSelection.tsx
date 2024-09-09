import "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode } from "swiper/modules";
import { useGlobalContext } from "@/ContextApi";

export default function SwiperSelection() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div
      className={`flex gap-5 rounded-lg p-3 ${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"}`}
    >
      <div className="w-[1112px] overflow-x-auto">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        ?
      </button>
    </div>
  );
}
