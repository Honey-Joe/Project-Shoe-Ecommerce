import { Carousel } from "flowbite-react";
import React from "react";
import { heroimg1, heroimg2, heroimg3 } from "../../../assets/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSecrion = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto py-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="relative ">
              <img
                src={heroimg1}
                alt=""
                className="w-[100%] object-cover h-screen"
              />
              <div className="absolute lg:top-[180px]  top-10 left-20 font-[Roboto] text-[#c5ec31] flex flex-col gap-3">
                <div>
                  <p className="text-[40px]">ZEN VIVID 15</p>
                </div>
                <div>
                  <p className="text-[18px]">best sellers from $99.00</p>
                </div>
                <div>
                  <button className="bg-[#c5ec31] px-5 py-3 text-black">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative ">
              <img
                src={heroimg2}
                alt=""
                className="w-[100%] object-cover h-screen"
              />
              <div className="absolute lg:bottom-[180px] left-[20%] md:left-[33%] lg:justify-start justify-center top-10 lg:left-[40%] font-[Roboto] text-[#000] flex flex-col gap-3 items-center">
                <div>
                  <p className="text-[40px] text-center">START FROM</p>
                </div>
                <div>
                  <p className="text-[18px] text-center">$745</p>
                </div>
                <div>
                  <button className="bg-[#9EECE4] px-5 py-3 text-black ">
                    VIEW COLLECTION
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative ">
              <img
                src={heroimg3}
                alt=""
                className="w-[100%] object-cover h-screen"
              />
              <div className="absolute lg:bottom-[180px] lg:left-[60%] left-5 items-center lg:items-start top-16  justify-center font-[Roboto] text-[#000] flex flex-col gap-3 w-[90%] mx-auto  lg:w-[35%]">
                <div>
                  <p className="text-[16px]">summer canvas</p>
                </div>
                <div>
                  <p className="text-[40px] text-center lg:text-start text-[#4c4029] font-bold font-[Roboto]">
                    FROM THE  SUMMER
                  </p>
                </div>
                <div>
                  <p className="font-[Poppins] lg:text-start text-center">
                    Ullamcorper eget nulla facilisi etiam dignissim. Quis
                    eleifend quam adipiscing vitae proin sagittis nisl rhoncus
                    mattis. Scelerisque eu ultrices
                  </p>
                </div>
                <div>
                  <button className="bg-[#4C4029] font-[Poppins] px-5 py-3 text-white hover:bg-white hover:text-black ">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSecrion;
