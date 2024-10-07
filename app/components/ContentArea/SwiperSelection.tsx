// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode } from "swiper/modules";
import { useGlobalContext } from "@/ContextApi";
import { AddOutlined } from "@mui/icons-material";

export default function SwiperSelection() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  return (
    <div
      className={`flex justify-start gap-5 rounded-lg p-3 ${darkMode[1].isSelected ? "bg-slate-800 text-white" : "bg-white"}`}
    >
      <div className="w-11/12 overflow-x-auto">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide className="w-20 rounded-md bg-primary text-white">
            All
          </SwiperSlide>
          <SwiperSlide>react exercise</SwiperSlide>
          <SwiperSlide>react exercise</SwiperSlide>
          <SwiperSlide>react exercise</SwiperSlide>
          <SwiperSlide>react exercise</SwiperSlide>
          <SwiperSlide>react exercise</SwiperSlide>
          <SwiperSlide>react exercise</SwiperSlide>
          <SwiperSlide>react exercise</SwiperSlide>
          <SwiperSlide>react exercise</SwiperSlide>
          <SwiperSlide>react exercise</SwiperSlide>
          <SwiperSlide>react exercise</SwiperSlide>
        </Swiper>
      </div>
      <button className="flex items-center rounded-md bg-primary p-1 px-3 text-white">
        <AddOutlined sx={{ fontSize: 18 }} />
        <span>Tag</span>
      </button>
    </div>
  );
}
